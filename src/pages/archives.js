import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/heading'
import Posts from '../components/posts'
import './posts.scss'

const ArchivesPage = (props) => (
  <Layout className="archives-page">
    <SEO title="Archives" />
    <H1 className="heading">Archives of all the things</H1>
    <div className="posts-container">
      <Posts
        edges={props.data.allMarkdownRemark.edges}
        truncate={20}
        showNumbers={true}
      />
    </div>
  </Layout>
)

export default ArchivesPage

export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(
      filter: {fields: {slug: {nin: "/blog/template"}}} 
      sort: {order: DESC, fields: fields___date}
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