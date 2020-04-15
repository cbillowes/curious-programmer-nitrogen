import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import ArchivesPage from '../components/pages/archives'

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
        allMarkdownRemark(
          filter: {fields: {slug: {nin: "/blog/template"}}}
          sort: {order: DESC, fields: fields___date}
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
                author
              }
            }
          }
        }
      }
    `
  )
  const site = data.site.siteMetadata
  const edges = data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title={`Archives | ${site.title}`}
        crawl={false}
      />
      <ArchivesPage
        edges={edges}
      />
    </>
  )
}
