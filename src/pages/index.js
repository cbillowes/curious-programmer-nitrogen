import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import IndexPage from "../components/pages"

export default () => {
  const data = useStaticQuery(
    graphql`
      query LandingPageQuery {
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
          edges {
            node {
              html
              timeToRead
              html
              fields {
                slug
                date
                number
              }
              frontmatter {
                title
                photo
                credit
                creditLink
                creditSource
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
      <SEO
        title="Read about all the things I write about."
        type="website"
        crawl={true}
        siteMetadata={siteMetadata}
      >
        I share thoughts. I share ideas. I share knowledge. This is my blog as a
        curious programmer.
      </SEO>
      <IndexPage edges={edges} />
    </>
  )
}
