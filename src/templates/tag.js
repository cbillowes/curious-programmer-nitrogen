import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Anchor from '../components/anchor'
import Posts from '../components/posts'
import { H1 } from '../components/heading'
import { SmallSpacer } from '../components/spacer'

export default (props) => {
  const { tag } = props.pageContext
  const edges = props.data.allMarkdownRemark.edges
  return (
    <Layout
      className="tags-template"
      footer={true}
    >
      <SEO title={tag} />
      <SmallSpacer />
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