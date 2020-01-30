import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/heading'
import Posts from '../components/posts'

const NotFoundPage = (props) => (
  <Layout>
    <SEO title="Page not found" />
    <H1>Sorry!</H1>
    <p>
      Whatever you clicked on is going to something that doesn&#39;t exist. 
    </p>
    <Posts edges={props.data.allMarkdownRemark.edges} />
  </Layout>
)

export default NotFoundPage

export const pageQuery = graphql`
  query PageNotFound {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
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