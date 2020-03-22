import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Anchor from '../components/anchor'
import Posts from '../components/posts'
import { H1 } from '../components/heading'
import '../styles/tag.scss'

export default (props) => {
  const { tag } = props.pageContext
  const edges = props.data.allMarkdownRemark.edges
  return (
    <Layout
      className="tag-page"
      footer={true}
    >
      <SEO
        title={tag}
        crawl={false}
      />
      <H1>
        <Anchor to="/tags" title="Tags">tags</Anchor>: {tag.toLowerCase()}
      </H1>
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
            number
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

//TODO: move graphql queries across the site inline using useStaticQuery
