import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ReadingPane from '../components/readingPane'
import Anchor from '../components/anchor'
import Posts from '../components/posts'
import '../styles/page.scss'

const NotFoundPage = (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout
      className="not-found-page"
      footer={true}
    >
      <SEO
        title="Something is missing"
        crawl={false}
      />
      <ReadingPane
        heading="Embarrassing much? O_o"
      >
        <p>
          Something doesn&lsquo;t seem quite right.
          Whatever you clicked on cannot be found or no longer exists.
          I may have accidentally changed the route or deleted the file
          or you accessed a broken link.
        </p>
        <p>
          <Anchor
            to="/about"
            title="Contact me"
          >
            Let me know
          </Anchor>
          if you are looking for something in particular.
          In the meantime, check out some of my latest posts below or browse the
          <Anchor
            to="/archives"
            title="Archives"
          >
            archives
          </Anchor> for everything.
        </p>
      </ReadingPane>
      <Posts
        edges={posts}
        showNumbers={true}
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
      limit: 6
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
            number
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
