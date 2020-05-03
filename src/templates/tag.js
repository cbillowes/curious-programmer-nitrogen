import _ from "lodash"
import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import TagPage from "../components/pages/tag"
import "../styles/tag.scss"

export const query = graphql`
  query TagTemplateQuery($tag: String!) {
    allMarkdownRemark(
      filter: {frontmatter: {tags: {in: [$tag]}}, fields: {slug: {nin: "/blog/example"}}},
      sort: {order: DESC, fields: fields___date}
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            date
            number
            slug
          }
          html
          timeToRead
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        image
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
      <SEO title={tag} crawl={false} siteMetadata={siteMetadata} />
      <TagPage tag={tag} edges={edges} />
    </>
  )
}
