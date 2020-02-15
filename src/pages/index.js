import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Posts from '../components/posts'
import ShowMore from '../components/showMore'

const IndexPage = (props) => (
  <Layout className="blog">
    <SEO title="Blog" />
    <div className="spacer"></div>
    <Posts 
      edges={props.data.allMarkdownRemark.edges} 
      showNumbers={true} 
      startAt={props.data.allMarkdownRemark.totalCount}
    />
    <ShowMore />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {fields: {slug: {nin: "/blog/template"}}} 
      sort: {order: DESC, fields: fields___date}
      limit: 10
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          html
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