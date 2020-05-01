const _ = require("lodash")
const path = require(`path`)
const fs = require("fs")
const sharp = require("sharp")

// The order of which nodes are processed is no guaranteed.
// To add numbers to each post, nodes need to be captured
// and processed sequentially by date
const nodes = []

// There is a post that has been created to preview elements that can be
// used in any given post. This example post must be not available in
// * the numbering system
// * navigational system
// * post listings
// * exporting of posts for search indexing
// It must however be available for display as its own entity
// accessible only by its slug
const exclusionSlugForPost = `/blog/example`

// Where all the incremental search index files go to live
const exportDirectory = path.join(`${__dirname}`, `export`)

/**
 * GATSBY API.
 * Events firing in the lifecycle
 * https://www.gatsbyjs.org/docs/actions/
 */

// Add the date field to the node and then store the it so that it can be
// processed sequentially in the lifecycle later on.
// https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodes(node, createNodeField)
  }

  if (node.internal.type === `File`) {
    copyGifImages(node, reporter)
    copyShareImages(node, reporter)
    copyTeaserImages(node, reporter)
    copyThumbnails(node, reporter)
    copySvgImages(node, reporter)
  }
}

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPosts(graphql, actions, reporter)
  await createTags(graphql, actions, reporter)
  await createSearchIndexes(graphql, reporter)
  createBlog(actions, reporter)
}

// This is the part where numbers and any other graphql fields can be added.
// https://www.gatsbyjs.org/docs/node-apis/#setFieldsOnGraphQLNodeType
exports.setFieldsOnGraphQLNodeType = ({ type, actions, reporter }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === "MarkdownRemark") {
    applyNumbers(createNodeField)
  }
}

/**
 * CORE LOGIC.
 * Powerful worker functions.
 */
const createNodes = (node, createNodeField) => {
  const { title, date } = node.frontmatter
  const slug = path.join(`/blog`, _.kebabCase(title))

  createNodeField({
    node,
    name: `number`,
    value: 0
  })

  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })

  createNodeField({
    node,
    name: `date`,
    value: date,
  })

  nodes.push(node)
}

const createBlogPosts = async (graphql, actions, reporter) => {
  const { createPage } = actions
  await graphql(`
    query CreateBlogPostsQuery {
      allMarkdownRemark(sort: { order: ASC, fields: fields___date }) {
        edges {
          node {
            html
            excerpt
            timeToRead
            fields {
              slug
              date
              number
            }
            frontmatter {
              title
              photo
              credit
              creditLink
              creditSource
              tags
            }
          }
        }
      }
    }
  `)
    .then(async result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }

      createBlogPages(createPage, result, reporter)
      createDemoBlogPage(createPage, result, reporter)
    })
}

const createBlogPages = (createPage, result, reporter) => {
  const edges = edgesWithoutDemoPost(result)
  edges.forEach((_, index) => {
    const { number, slug, date, previous, next } = getPost(edges, index)
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug,
        date,
        number,
        previous: previous.node,
        next: next.node,
      },
    })
    reporter.verbose(`
      previous: [${previous.number}] ${previous.node.fields.slug}
      this    : [${number}] ${slug}
      next    : [${next.number}] ${next.node.fields.slug}
    `)
  })
}

const createDemoBlogPage = (createPage, result, reporter) => {
  const edges = result.data.allMarkdownRemark.edges
  const slugs = edges.map(edge => edge.node.fields.slug)
  const demo = slugs.indexOf(exclusionSlugForPost)
  if (demo === -1) return

  const { number, slug, date, previous, next } = getPost(edges, demo)
  createPage({
    path: slug,
    component: path.resolve(`./src/templates/post.js`),
    context: {
      slug,
      date,
      number,
      previous: previous.node,
      next: next.node,
    },
  })
  reporter.verbose(`
    previous: [${previous.number}] ${previous.node.fields.slug}
    this    : [${number}] ${slug}
    next    : [${next.number}] ${next.node.fields.slug}
  `)
}

const createTags = async (graphql, actions, reporter) => {
  const { createPage } = actions
  await graphql(`
    query CreateTagsQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              date
            }
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }
      const edges = edgesWithoutDemoPost(result)
      const tags = getTags(edges)
      tags.forEach(({ slug, tag }) => {
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag,
            slug,
          },
        })
        reporter.verbose(slug)
      })
    })
}

const createBlog = (actions, reporter) => {
  const { createPage } = actions
  const slug = `/blog`
  createPage({
    path: slug,
    component: path.resolve(`./src/pages/index.js`),
    context: {
      slug,
    },
  })
  reporter.verbose(slug)
}

const createSearchIndexes = async (graphql, reporter) => {
  await graphql(`
    query CreateSearchIndexesQuery {
      allMarkdownRemark(sort: { order: ASC, fields: fields___date }) {
        edges {
          node {
            html
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
          }
        }
      }
    }
  `)
    .then(async result => {
      if (result.errors) {
        reporter.error(`something broke`)
        return
      }

      // Let's be sure not to index the demo page.
      const slugs = getPreviousExportedSlugs()
      const edges = edgesWithoutDemoPost(result)
        .filter(edge => slugs.indexOf(edge.node.fields.slug) === -1)

      const posts = edges.map(edge => {
        const node = edge.node
        const slug = node.fields.slug
        if (slugs.indexOf(slug) > -1) return

        return {
          slug,
          title: node.frontmatter.title,
          tags: node.frontmatter.tags,
          html: tidyIndexableContent(node.html),
        }
      })

      storeIncrementalExport(posts)
      storeIncrementalExportLog(posts.map(post => post.slug))
    })
}

const applyNumbers = (createNodeField) => {
  const numberable = nodes.filter(node => node.fields !== exclusionSlugForPost)
  const sorted = numberable.sort(
    (a, b) => toTimestamp(a.fields.date) - toTimestamp(b.fields.date)
  )
  sorted.forEach((node, index) => {
    createNodeField({
      node,
      name: `number`,
      value: index,
    })
  })
}

/**
 * HELPERS.
 * The unicorns bringing everything magically together.
 */

const toTimestamp = (date) => {
  return new Date(date).getTime()
}

const getTags = (edges) => {
  const tags = edges.map(edge => edge.node.frontmatter.tags)
  const flattened = [].concat.apply([], tags)
  const unique = [... new Set(flattened)]
  const filtered = unique.filter(Boolean)
  return filtered.map(tag => {
    return {
      slug: path.join(`/tag`, _.kebabCase(tag)),
      tag,
    }
  })
}

const edgesWithoutDemoPost = (graphqlResult) => {
  return graphqlResult.data.allMarkdownRemark.edges
    .filter(edge => edge.node.fields.slug !== exclusionSlugForPost)
}

const getPreviousNode = (edges, index) => {
  const i = index === 0 ? edges.length - 1 : index - 1
  return {
    number: i + 1,
    node: edges[i].node,
  }
}

const getNextNode = (edges, index) => {
  const i = index === edges.length - 1 ? 0 : index + 1
  return {
    number: i + 1,
    node: edges[i].node,
  }
}

const getPost = (edges, index) => {
  const node = edges[index].node
  return {
    number: index + 1,
    slug: node.fields.slug,
    date: node.fields.date,
    previous: getPreviousNode(edges, index),
    next: getNextNode(edges, index),
  }
}

const tidyIndexableContent = (html) => {
  return html
    .replace(/<[^>]+>/gm, ``)
    .replace(/([\r\n]+ +)+/gm, ``)
    .replace(/\n/g, ` `)
}

const getPreviousExportedSlugs = () => {
  const files = fs.readdirSync(exportDirectory).filter(file => file !== `slugs.txt`)
  const slugs = files.map(file => {
    const data = fs.readFileSync(path.join(exportDirectory, file), { encoding: `utf-8` })
    const json = JSON.parse(data)
    return json.map(j => {
      return j.slug
    })
  })
  return [].concat.apply([], slugs)
}

const storeIncrementalExport = (posts) => {
  if (posts.length === 0) return
  const filename = `${__dirname}/export/search-${toTimestamp(new Date())}.json`
  fs.writeFileSync(filename, JSON.stringify(posts), `utf-8`)
}

const storeIncrementalExportLog = (slugs) => {
  if (slugs.length === 0) return
  const date = new Date()
  const data = slugs.reduce((result, slug) => {
    return `${result}\n${date}: ${slug}`
  }, "")
  fs.appendFileSync(path.join(exportDirectory, `slugs.txt`), data, { encoding: `utf-8` })
}

const getDestPath = (relativeDir, filename) => {
  return path.join(process.cwd(), relativeDir, filename)
}

const copy = (src, dest, reporter) => {
  const destPath = path.dirname(dest)
  fs.existsSync(destPath) || fs.mkdirSync(destPath)
  fs.copyFile(src, dest, err => {
    if (err)
      reporter.error(`${src} -> ${dest}\n${err}`)
  })
}

const copyGifImages = (node, reporter) => {
  if (node.internal.mediaType === `image/gif` && node.absolutePath.indexOf(`/src/images`) >= 0) {
    const newPath = getDestPath(`public/static/gifs`, node.base)
    copy(node.absolutePath, newPath, reporter)
  }
}

const getSharpInstance = (absolutePath) => {
  const ext = path.extname(absolutePath)
  switch (ext) {
    case ".jpeg":
    case ".jpg":
      return sharp(absolutePath).jpeg({ quality: 50 })

    case ".png":
      return sharp(absolutePath).png({ quality: 50 })
  }
  return sharp(absolutePath)
}

const copyShareImages = (node, reporter) => {
  if (node.absolutePath.indexOf(`/src/images/posts`) >= 0) {
    const destPath = `public/static/share`
    const copyTo = getDestPath(destPath, node.base)
    fs.existsSync(destPath) || fs.mkdirSync(destPath)

    const inst = getSharpInstance(node.absolutePath)
    inst
      .resize(1200, 1200, {
        fit: sharp.fit.cover,
        position: sharp.strategy.attention,
      })
      .toFile(copyTo, err => {
        if (err)
          reporter.error(`${node.absolutePath} -> ${copyTo}\n${err}`)
      })
  }
}

const copyTeaserImages = (node, reporter) => {
  if (node.absolutePath.indexOf(`/src/images/posts`) >= 0) {
    const destPath = `public/static/teasers`
    const copyTo = getDestPath(destPath, node.base)
    fs.existsSync(destPath) || fs.mkdirSync(destPath)

    const inst = getSharpInstance(node.absolutePath)
    inst
      .resize(1200, 300, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(copyTo, err => {
        if (err)
          reporter.error(`${node.absolutePath} -> ${copyTo}\n${err}`)
      })
  }
}

const copyThumbnails = (node, reporter) => {
  if (node.absolutePath.indexOf(`/src/images/posts`) >= 0) {
    const destPath = `public/static/thumbnails`
    const copyTo = getDestPath(destPath, node.base)
    fs.existsSync(destPath) || fs.mkdirSync(destPath)

    const inst = getSharpInstance(node.absolutePath)
    inst
      .resize(600, 250, {
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy,
      })
      .toFile(copyTo, err => {
        if (err)
          reporter.error(`${node.absolutePath} -> ${copyTo}\n${err}`)
      })
  }
}

const copySvgImages = (node, reporter) => {
  const ext = path.extname(node.absolutePath)
  if (ext === `.svg`) {
    const destPath = `public/static/svgs`
    const copyTo = getDestPath(destPath, node.base)
    fs.existsSync(destPath) || fs.mkdirSync(destPath)
    copy(node.absolutePath, copyTo, reporter)
  }
}
