import React from 'react'
import Post from '../components/post'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default (props) => {
  const { slug, next, prev } = props.pageContext
  const node = props.data.post
  const frontmatter = node.frontmatter
  console.log({s: slug, n: next, p: prev, pn: node})
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Post
        slug={slug}
        title={frontmatter.title}
        date={frontmatter.date}
        tags={frontmatter.tags}
        ttr={node.timeToRead}
      >
        {node.html}
      </Post>
    </Layout>
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