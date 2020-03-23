import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import IndexPage from '../components/pages'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {fields: {slug: {nin: "/blog/template"}}}
          sort: {order: DESC, fields: fields___date}
          limit: 10
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
  const edges = data.allMarkdownRemark.edges
  return (
    <>
      <SEO
        title="Blog"
        crawl={true}
      >
        I share thoughts. I share ideas. I share knowledge.
        This is my blog as a curious programmer.
      </SEO>
      <IndexPage
        edges={edges}
      />
    </>
  )
}
