import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import TagsPage from '../components/pages/tags'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            title
          }
        }
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
  )
  const site = data.site.siteMetadata
  return (
    <>
      <SEO
        title={`Tags | ${site.title}`}
        crawl={false}
      />
      <TagsPage edges={data.allMarkdownRemark.edges} />
    </>
  )
}
