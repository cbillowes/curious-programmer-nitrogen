const path = require(`path`)
const _ = require('lodash')

async function generateBlogPosts( graphql, actions, reporter ) {
  const { createPage } = actions
  await graphql(`
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
  .then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Something`)
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
  })
}

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
  await generateBlogPosts(graphql, actions, reporter)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.path = `/blog`
    createPage(page)
  }
}