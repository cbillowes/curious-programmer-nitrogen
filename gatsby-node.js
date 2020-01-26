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
      reporter.panicOnBuild(`Generating blog posts: something is wrong with the GraphQL query for blog pages`)
      return
    }

    const template = path.resolve(`./src/templates/post.js`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.fields.slug
      reporter.info(`Generating blog post: ${path}`)
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

async function generateTags( graphql, actions, reporter ) {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Generating tag pages: something is wrong with the GraphQL query for tags`)
      return
    }

    const tags = []
    const template = path.resolve(`./src/templates/tag.js`)
    result.data.allMarkdownRemark.edges.map(edge => {
      const postTags = edge.node.frontmatter.tags || []
      postTags.map(tag => {
        const path = `/tag/${tag.toLowerCase()}`
        if (tags.indexOf(tag) > -1)
          return
        
        reporter.info(`Generating tag page: ${path}`)
        createPage({
          path,
          component: template,
          context: {
            slug: path,
          },
        })
        return
      })
      return
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
  await generateTags(graphql, actions, reporter)
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === `/`) {
    page.path = `/blog`
    createPage(page)
  }
}