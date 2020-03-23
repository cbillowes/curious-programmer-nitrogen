import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import PostPage from '../components/pages/post'

export default context => {
  useStaticQuery(
    graphql`
      query($path: String!) {
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
  const { slug, next, previous, number } = context.pageContext
  const { html, excerpt, timeToRead } = context.data.markdownRemark
  const { date } = context.data.markdownRemark.fields
  const { title, tags, author } = context.data.markdownRemark.frontmatter

  return (
    <>
      <SEO
        title={title}
        crawl={true}
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
        author={author}
        html={html}
        next={next}
        previous={previous}
        number={number}
      />
    </>
  )
}
