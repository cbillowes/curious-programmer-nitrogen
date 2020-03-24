import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import TagsPage from '../components/pages/tags'

export default () => {
  const remark = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 1000) {
          totalCount
          edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
   `
  )
  return (
    <>
      <SEO
        title="Tags"
        crawl={false}
      />
      <TagsPage edges={remark.allMarkdownRemark.edges} />
    </>
  )
}
