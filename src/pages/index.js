import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'

const IndexPage = (props) => (
  <Layout>
    <SEO title="Blog" />
    <Posts edges={props.data.allMarkdownRemark.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 30
    ) {
      edges {
        node {
          timeToRead
          html
          fields {
            slug
            date
          }
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
            tags
            author
            excerpt
          }
        }
      }
    }
  }
`