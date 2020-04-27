import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PostPage from "../components/pages/post"

export const query = graphql`
  query PostTemplateQuery($path: String!) {
    site {
      siteMetadata {
        title
        author
        image
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      excerpt
      timeToRead
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
`

export default ({ data, pageContext }) => {
  const siteMetadata = data.site.siteMetadata
  const { slug, next, previous, number } = pageContext
  const { html, excerpt, timeToRead } = data.markdownRemark
  const { date } = data.markdownRemark.fields
  const { title, tags } = data.markdownRemark.frontmatter

  return (
    <>
      <SEO title={title} crawl={true} siteMetadata={siteMetadata}>
        {excerpt}
      </SEO>
      <PostPage
        slug={slug}
        title={title}
        date={date}
        tags={tags}
        excerpt={excerpt}
        timeToRead={timeToRead}
        author={siteMetadata.author}
        html={html}
        next={next}
        previous={previous}
        number={number}
      />
    </>
  )
}
