import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import ArchivesPage from "../components/pages/archives"

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
        allMarkdownRemark(
          filter: { fields: { slug: { nin: "/blog/example" } } }
          sort: { order: DESC, fields: fields___date }
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
              fields {
                number
                slug
                date
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  )
  const siteMetadata = data.site.siteMetadata
  const edges = data.allMarkdownRemark.edges
  return (
    <>
      <SEO title="Archives" crawl={false} siteMetadata={siteMetadata} />
      <ArchivesPage edges={edges} />
    </>
  )
}
