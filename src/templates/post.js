import React from 'react'
import Post from '../components/post'
import SEO from '../components/seo'
import PostNavigationTiny from '../components/postNavigationTiny'
import PostNavigation from '../components/postNavigation'
import Footer from '../components/footer'
import Layout from '../components/layout'

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
  const { slug, next, previous } = props.pageContext
  const { html, timeToRead } = remark
  const { title, tags, excerpt } = remark.frontmatter
  const { date } = remark.fields
  const previousPost = postNavigation(previous)
  const nextPost = postNavigation(next)
  return (
    <>
      <Layout
        footer="hidden"
      >
        <SEO title={title} />
        <PostNavigationTiny
          previous={previousPost}
          next={nextPost}
        />
        <Post
          slug={slug}
          title={title}
          date={date}
          tags={tags}
          ttr={timeToRead}
          excerpt={excerpt}
        >
          {html}
        </Post>
      </Layout>
      <PostNavigation
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
      timeToRead
      frontmatter {
        title
        tags
        excerpt
      }
      fields {
        slug
        date
      }
    }
  }
`