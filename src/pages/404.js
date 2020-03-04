import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReadingPane from '../components/readingPane'
import Anchor from '../components/anchor'
import Posts from '../components/posts'

const NotFoundPage = (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO
        title="Page cannot be found"
      >
        The page you are looking for cannot be found.
      </SEO>
      <ReadingPane
        heading="Embarrassing much? O_o"
      >
        <p>
          Something doesn&lsquo;t seem quite right.
          Whatever you clicked on cannot be found or no longer exists.
          I may have accidentally changed the route or deleted the file.
          <Anchor
            to="/about"
            title="Contact me"
          >
            Drop me a line
          </Anchor>
          if you are looking for something in particular.
          In the meantime, check out some of my latest posts or browse the
          <Anchor
            to="/archives"
            title="Archives"
          >
            archives
          </Anchor> for more.
        </p>
      </ReadingPane>
      <Posts
        edges={posts}
      />
    </Layout>
  )
}
export default NotFoundPage

export const pageQuery = graphql`
  query PageNotFound {
    allMarkdownRemark(
      filter: {fields: {slug: {nin: "/blog/template"}}}
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