import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/heading'
import Posts from '../components/posts'
import './archives.css'

const ArchivesPage = (props) => (
  <Layout className="archives-page">
    <SEO title="Archives" />
    <H1 className="heading">Archives</H1>
    <div className="archives">
      <Posts 
        edges={props.data.allMarkdownRemark.edges}
        truncate={10}
      />
    </div>
  </Layout>
)

export default ArchivesPage

export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
            date
          }
          frontmatter {
            title
            tags
            author
            blurb
          }
        }
      }
    }
  }
`