import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import PostPage from '../components/pages/post'

export default context => {
  useStaticQuery(
    graphql`
      query($path: String!) {
        site {
          siteMetadata {
            title
            author
          }
        }
        markdownRemark(fields: { slug: { eq: $path } }) {
          html
          excerpt
          timeToRead
          fields {
            date
          }
          frontmatter {
            title
            tags
          }
        }
      }
    `
  )
  const siteMetadata = context.data.site.siteMetadata
  const { slug, next, previous, number } = context.pageContext
  const { html, excerpt, timeToRead } = context.data.markdownRemark
  const { date } = context.data.markdownRemark.fields
  const { title, tags } = context.data.markdownRemark.frontmatter

  return (
    <>
      <SEO
        title={title}
        crawl={true}
        siteMetadata={siteMetadata}
      >
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
