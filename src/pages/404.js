import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PageNotFound from '../components/pages/404'
import SEO from '../components/seo'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {fields: {slug: {nin: "/blog/template"}}}
          sort: { fields: [fields___date], order: DESC }
          limit: 6
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              timeToRead
              fields {
                slug
                number
              }
              frontmatter {
                title
                tags
                author
                blurb
              }
            }
          }
        }
      }
    `
  )
  const edges = data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title="Something is missing"
        crawl={false}
      />
      <PageNotFound
        edges={edges}
      />
    </>
  )
}
