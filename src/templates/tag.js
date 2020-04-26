import _ from "lodash"
import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TagPage from '../components/pages/tag'
import '../styles/tag.scss'

export const query = graphql`
  query TagTemplateQuery ($tag: String!) {
    site {
      siteMetadata {
        title
        description
        image
      }
    }
    allMarkdownRemark (
      limit: 1000,
      sort: { fields: [fields___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            number
            slug
          }
          frontmatter {
            title
            tags
          }
          html
          timeToRead
        }
      }
    }
  }
`

export default ({ data, pageContext }) => {
  const tag = _.upperFirst(pageContext.tag)
  const siteMetadata = data.site.siteMetadata
  const edges = data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title={tag}
        crawl={false}
        siteMetadata={siteMetadata}
      />
      <TagPage
        tag={tag}
        edges={edges}
      />
    </>
  )
}
