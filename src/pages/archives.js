import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'

const ArchivesPage = (props) => (
  <Layout>
    <SEO title="Archives" />
    <Posts 
      edges={props.data.allMarkdownRemark.edges}
      truncate={10}
    />
  </Layout>
)

export default ArchivesPage

export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            title
            tags
            author
            date
          }
        }
      }
    }
  }
`