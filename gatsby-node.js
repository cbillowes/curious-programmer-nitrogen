const path = require(`path`)
const _ = require('lodash')

const nodes = []

function getTimestamp(date) {
  return new Date(date).getTime()
}

function addNodeFieldsOnSortedCollection(createNodeField, reporter) {
  const sortedNodes = nodes.sort((a, b) => getTimestamp(a.fields.date) - getTimestamp(b.fields.date))
  for (let i = 0; i < sortedNodes.length; i += 1) {
    const current = sortedNodes[i]
    createNodeField({
      node: current,
      name: "number",
      value: i + 1
    })
    reporter.info(`+number (${i}): ${current.fields.slug}`)
  }
}

exports.setFieldsOnGraphQLNodeType = ({ type, actions, reporter }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === "MarkdownRemark") {
    addNodeFieldsOnSortedCollection(createNodeField, reporter)
  }
}

function generateBlogPage(actions) {
  const { createPage } = actions
  const template = path.resolve(`./src/pages/index.js`)
  createPage({
    path: `/blog`,
    component: template,
    context: {
      slug: `/blog`,
    },
  })
}

async function generateBlogPosts(graphql, actions, reporter) {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark(
        sort: {order: ASC, fields: fields___date})
      {
        edges {
          node {
            html
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
              blurb
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

      posts.forEach(({ node }, index) => {
        const { slug } = node.fields
        const previous = index === 0 ? posts[posts.length - 1].node : posts[index - 1].node
        const next = index === (posts.length - 1) ? posts[0].node : posts[index + 1].node
        createPage({
          path: slug,
          component: template,
          context: {
            slug,
            date: node.fields.date,
            number: index + 1,
            previous,
            next,
          }
        })

        reporter.info(`${index}: Generating blog post: ${slug}\n${previous ? `Previous: ${previous.fields.slug}\n` : ``}${next ? `Next: ${next.fields.slug}\n` : ``}`)
      })
    })
}

async function generateTags(graphql, actions, reporter) {
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
          const path = `/tag/${tag.toLowerCase().replace(/ /g, `-`)}`
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
      name: `number`,
      value: 0,
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
    reporter.info(`Create nodes: ${slug}, ${date}`)
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await generateBlogPosts(graphql, actions, reporter)
  await generateTags(graphql, actions, reporter)
  generateBlogPage(actions)
}
