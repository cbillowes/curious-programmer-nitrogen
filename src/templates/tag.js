import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'

export default (props) => {
  console.log(props)
  const { tag } = props.pageContext
  const edges = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title={tag} />
      <Posts
        edges={edges}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
    }
  }
`