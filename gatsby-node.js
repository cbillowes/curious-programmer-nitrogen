const path = require(`path`)
const moment = require('moment')
const _ = require('lodash')

const dateFromFormat = `YYYY-MM-DD`
let posts = []

function addSiblings(createNodeField, reporter) {
  posts.sort(
    ({ fields: { date: x } }, { fields: { date: y } }) => {
      const a = moment(x, dateFromFormat)
      const b = moment(y, dateFromFormat)

      if (a.isBefore(b)) return 1
      if (b.isBefore(a)) return -1
      return 0
    }
  )

  for (let i = 0; i < posts.length; i += 1) {
    const nextIdx = i + 1 < posts.length ? i + 1 : 0
    const prevIdx = i - 1 >= 0 ? i - 1 : posts.length - 1
    const current = posts[i]
    const next = posts[nextIdx]
    const prev = posts[prevIdx]

    createNodeField({
      node: current,
      name: `nextTitle`,
      value: next.frontmatter.title
    })
    createNodeField({
      node: current,
      name: `nextSlug`,
      value: next.fields.slug
    })
    createNodeField({
      node: current,
      name: `prevTitle`,
      value: prev.frontmatter.title
    })
    createNodeField({
      node: current,
      name: `prevSlug`,
      value: prev.fields.slug
    })

    reporter.info(`Siblings [${current.fields.slug}]: [${prev.fields.slug}]...[${next.fields.slug}]`)
  }
}

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
            frontmatter {
              date
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
          date: node.frontmatter.date,
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
              date
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

exports.onCreateNode = ({ node, actions }) => {
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
    posts.push(node)
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

exports.setFieldsOnGraphQLNodeType = ({ type, actions, reporter }) => {
  const { name } = type
  const { createNodeField } = actions
  if (name === "MarkdownRemark") {
    addSiblings(createNodeField, reporter)
  }
}