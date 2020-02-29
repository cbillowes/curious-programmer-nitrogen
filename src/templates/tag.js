import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { H1 } from '../components/heading'
import Posts from '../components/posts'
import ShowMore from '../components/showMore'
import { SmallSpacer } from '../components/spacer'

const MoreTags = () => (
  <ShowMore
    to="/tags"
    title="See more tags" />
)

export default (props) => {
  const { tag } = props.pageContext
  const edges = props.data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title={tag} />
      <SmallSpacer />
      <H1>{tag}</H1>
      <MoreTags />
      <Posts
        edges={edges}
      />
      <MoreTags />
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