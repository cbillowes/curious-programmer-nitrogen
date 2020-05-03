const _ = require("lodash")
const path = require(`path`)
const fs = require("fs")
const images = require("./gatsby-build/images")
const blog = require("./gatsby-build/pages-blog")
const tags = require("./gatsby-build/pages-tags")

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
    images.process(node.internal.mediaType, node.absolutePath, reporter)
  }
}

// Create the necessary dynamic pages required to make the blog delicious.
// https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions, reporter }) => {
  await blog.create(actions, graphql, reporter)
  await tags.create(actions, graphql, reporter)
  await createSearchIndexes(graphql, reporter)
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
