import React from 'react'
import Post from '../components/post'
import SEO from '../components/seo'
import PostNavigationTiny from '../components/postNavigationTiny'
import PostNavigation from '../components/postNavigation'
import Footer from '../components/footer'
import Layout from '../components/layout'

function postNavigation(node) {
  return {
    title: node.frontmatter.title,
    slug: node.fields.slug,
    excerpt: node.excerpt,
    author: node.frontmatter.author,
    date: node.frontmatter.date,
    ttr: node.timeToRead,
    tags: node.frontmatter.tags,
  }
}

export default (props) => {
  const { slug } = props.pageContext
  const { post, prev, next } = props.data
  const frontmatter = post.frontmatter
  return (
    <>
      <Layout
        footer="hidden"
      >
        <SEO title={frontmatter.title} />
        <PostNavigationTiny
          previous={postNavigation(prev)}
          next={postNavigation(next)}
        />
        <Post
          slug={slug}
          title={frontmatter.title}
          date={frontmatter.date}
          tags={frontmatter.tags}
          ttr={post.timeToRead}
        >
          {post.html}
        </Post>
      </Layout>
      <PostNavigation
        previous={postNavigation(prev)}
        next={postNavigation(next)}
      />
      <Footer />
    </>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!, $next: String, $prev: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
        date
        cover
        ogImage
        blur
        tags
      }
      fields {
        slug
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prev } }) {
      excerpt(pruneLength: 200)
      timeToRead
      frontmatter {
        title
        date
        cover
        tags
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $next } }) {
      excerpt(pruneLength: 200)
      timeToRead
      frontmatter {
        title
        date
        cover
        tags
      }
      fields {
        slug
      }
    }
  }
`