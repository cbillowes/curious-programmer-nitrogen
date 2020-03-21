import React from 'react'
import { graphql } from 'gatsby'
import TagsPage from '../components/pages/tags'

const Page = ({ data }) => {
  const edges = data.allMarkdownRemark.edges
  return (
    <TagsPage edges={edges} />
  )
}

export default Page

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
