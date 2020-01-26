const path = require(`path`)
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = `/blog/${_.kebabCase(node.frontmatter.title)}`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while collecting blog pages from the GraphQL query`)
    return
  }

  const template = path.resolve(`./src/templates/post.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.fields.slug
    createPage({
      path,
      component: template,
      context: {
        slug: path,
      },
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.path = `/blog`
    createPage(page)
  }
}