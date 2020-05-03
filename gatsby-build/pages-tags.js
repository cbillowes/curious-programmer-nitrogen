const _ = require("lodash")
const path = require("path")
const config = require("../gatsby-build")
const createPages = true
const template = `./src/templates/tag.js`

const query = async (graphql) => {
  return await graphql(`
    query CreateTagsQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
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

module.exports.create = async (actions, graphql, reporter) => {
  if (!createPages) {
    reporter.warn(`off: create tag pages`)
    return
  }

  await query(graphql)
    .then(result => {
      if (result.errors) {
        reporter.error(`create tag pages: ${result.errors}`)
      }

      const { createPage } = actions
      const edges = result.data.allMarkdownRemark.edges
        .filter(edge => edge.node.slug !== config.DEMO_PAGE)

      getTags(edges)
        .forEach(({ slug, tag }) => {
          createPage({
            path: slug,
            component: path.resolve(template),
            context: {
              tag,
              slug,
            },
          })
          reporter.verbose(`tag: ${slug}`)
        })
    })
}
