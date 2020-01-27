const path = require(`path`)
const _ = require('lodash')

async function generateBlogPosts( graphql, actions, reporter ) {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark(sort: {order: DESC, fields: fields___date}) {
        edges {
          node {
            excerpt
            timeToRead
            fields {
              slug
              date
            }
            frontmatter {
              title
              tags
              author
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Generating blog post: GraphQL query error`)
      return
    }

    const template = path.resolve(`./src/templates/post.js`)
    const posts = result.data.allMarkdownRemark.edges
    for (let i = 0; i < posts.length; i++) {
      const nextIdx = i + 1 < posts.length ? i + 1 : 0
      const previousIdx = i - 1 >= 0 ? i - 1 : posts.length - 1
      const current = posts[i]
      const next = posts[nextIdx]
      const previous = posts[previousIdx]
      const { slug, date } = current.node.fields

      reporter.info(
        `Generating blog post: ${path}\n
         Previous: ${previous.node.fields.slug}\n
         Next: ${next.node.fields.slug}\n\n`)
      createPage({
        path: slug,
        component: template,
        context: {
          slug: slug,
          date: date,
          next: next,
          previous: previous,
        },
      })
    }
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
              date
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      reporter.panicOnBuild(`Generating tag page: GrapghQL query`)
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
        
        tags.push(tag)

        reporter.info(`Generating tag page: ${path}`)
        createPage({
          path,
          component: template,
          context: {
            tag,
            slug: path,
            date: edge.node.frontmatter.date,
          },
        })
        return
      })
      return
    })
  })
}

exports.onCreateNode = ({ node, actions, reporter }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = `/blog/${_.kebabCase(node.frontmatter.title)}`
    const date = node.frontmatter.date

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

    reporter.info(`Create nodes: ${slug}, ${date}`)
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
