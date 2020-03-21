import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReadingPane from '../components/readingPane'
import Tags from '../components/tags'
import '../styles/page.scss'

function flatten(tags) {
  let flattened = []
  tags.map(item => {
    flattened = flattened.concat(item)
  })
  return flattened
}

function distinct(tags) {
  let hashmap = []
  tags.map(item => {
    if (hashmap.indexOf(item) === -1)
      hashmap.push(item)
  })
  return hashmap
}

function getTags(edges) {
  const tags = edges
    .map(item => item.node.frontmatter)
    .map(item => item.tags)
    .map(item => !item ? [] : item)
  return distinct(flatten(tags)).sort()
}

const TagsPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  const tags = getTags(edges)
  return (
    <Layout
      className="tags-page"
      footer={true}
    >
      <SEO
        title="Tags"
        crawl={false}
      />
      <div data-page="tags">
        <ReadingPane
          heading="Tags"
        >
          <Tags
            tags={tags}
          />
        </ReadingPane>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query TagsPage {
    allMarkdownRemark(limit: 1000) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`

//TODO: test flatten and distinct functions
