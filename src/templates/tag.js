import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import TagPage from '../components/pages/tag'
import '../styles/tag.scss'

export default () => {
  useStaticQuery(
    graphql`
      query($tag: String!) {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          limit: 1000
          sort: { fields: [fields___date], order: DESC }
          filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
              html
              fields {
                slug
                date
                number
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
    `
  )

  const siteMetadata = props.data.site.siteMetadata
  const edges = props.data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title={tag.toLowerCase()}
        crawl={false}
        siteMetadata={siteMetadata}
      >
      </SEO>
      <TagPage
        tag={tag}
        edges={edges}
      />
    </>
  )

}
