import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/heading'
import Posts from '../components/posts'
import '../styles/page.scss'

const ArchivesPage = (props) => (
  <Layout
    className="archives-page"
    footer={true}
  >
    <SEO
      title="Archives"
      crawl={false}
    />
    <H1 className="heading">Archives of all the things</H1>
    <Posts
      edges={props.data.allMarkdownRemark.edges}
      truncate={20}
      showNumbers={true}
    />
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
            number
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
