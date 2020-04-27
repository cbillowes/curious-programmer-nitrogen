import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import TagsPage from "../components/pages/tags"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            image
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
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <SEO title="Tags" crawl={false} siteMetadata={siteMetadata} />
      <TagsPage edges={data.allMarkdownRemark.edges} />
    </>
  )
}
