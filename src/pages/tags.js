import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import TagsPage from "../components/pages/tags"

export default () => {
  const data = useStaticQuery(
    graphql`
      query TagsPageQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            brand
          }
        }
        allMarkdownRemark(
          filter: { fields: { slug: { nin: "/blog/example/" } } }
          sort: { order: DESC, fields: fields___number }
        ) {
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
      <SEO
        title="Tags"
        type="website"
        crawl={false}
        siteMetadata={siteMetadata}
      />
      <TagsPage edges={data.allMarkdownRemark.edges} />
    </>
  )
}
