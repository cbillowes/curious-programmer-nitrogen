const _ = require("lodash")
const path = require(`path`)
const fs = require("fs")
const images = require("./gatsby-build/images")
const blog = require("./gatsby-build/pages-blog")
const tags = require("./gatsby-build/pages-tags")
const search = require("./gatsby-build/search")

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
  await search.create(graphql, reporter)
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
