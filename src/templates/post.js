import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import PostNavigationTiny from '../components/postNavigationTiny'
import PostNavigationTeaser from '../components/postNavigationTeaser'
import Post from '../components/post'
import { LargeSpacer } from '../components/spacer'

function postNavigation(edge) {
  const { timeToRead, excerpt } = edge.node
  const { title, author, tags } = edge.node.frontmatter
  const { slug, date } = edge.node.fields
  return {
    title,
    slug,
    excerpt,
    author,
    date,
    ttr: timeToRead,
    tags,
  }
}

export default (props) => {
  const remark = props.data.markdownRemark
  const { slug, next, previous, number } = props.pageContext
  const { html, timeToRead } = remark
  const { title, tags, excerpt } = remark.frontmatter
  const { date } = remark.fields
  const previousPost = postNavigation(previous)
  const nextPost = postNavigation(next)
  return (
    <>
      <Layout
        className="post"
        footer="hidden"
      >
        <SEO title={title} />
        <PostNavigationTiny
          previous={previousPost}
          next={nextPost}
        />
        <LargeSpacer />
        <Post
          slug={slug}
          title={title}
          date={date}
          tags={tags}
          ttr={timeToRead}
          excerpt={excerpt}
          number={number}
        >
          {html}
        </Post>
      </Layout>
      <PostNavigationTeaser
        previous={previousPost}
        next={nextPost}
      />
      <Footer />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
        date
      }
      frontmatter {
        title
        tags
        blurb
      }
    }
  }
`