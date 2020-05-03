const _ = require("lodash")
const path = require("path")
const fs = require("fs")
const config = require("../gatsby-build")
const createIndexes = true

// Where all the incremental search index files go to live
const exportDirectory = path.join(__dirname, `/../export`)

const query = async (graphql) => {
  return await graphql(`
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
}

const toTimestamp = (date) => {
  return new Date(date).getTime()
}

const getHistoryOfPreviouslyExportedSlugs = () => {
  const files = fs.readdirSync(exportDirectory).filter(file => file !== `slugs.txt`)
  const slugs = files.map(file => {
    const filePath = path.join(exportDirectory, file)
    const data = fs.readFileSync(filePath, { encoding: `utf-8` })
    const json = JSON.parse(data)
    return json.map(j => {
      return j.slug
    })
  })
  return [].concat.apply([], slugs)
}

const tidyIndexableContent = (html) => {
  return html
    .replace(/<[^>]+>/gm, ``)
    .replace(/([\r\n]+ +)+/gm, ``)
    .replace(/\n/g, ` `)
}

const storeIncrementalExport = (posts) => {
  if (posts.length === 0) return
  const filename = `${exportDirectory}/search-${toTimestamp(new Date())}.json`
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

module.exports.create = async (graphql, reporter) => {
  if (!createIndexes) {
    reporter.warn(`off: create search indexes`)
    return
  }

  await query(graphql)
    .then(result => {
      if (result.errors) {
        reporter.error(`create search indexes: ${result.errors}`)
      }

      const history = getHistoryOfPreviouslyExportedSlugs()
      const edges = result.data.allMarkdownRemark.edges
        .filter(edge => edge.node.fields.slug !== config.DEMO_PAGE)
        .filter(edge => history.indexOf(edge.node.fields.slug) === -1)

      const posts = edges.map(edge => {
        const node = edge.node
        const slug = node.fields.slug
        if (history.indexOf(slug) > -1) return

        reporter.verbose(`index: ${slug}`)
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
