import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import CreditsPage from '../components/pages/credits'

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            title
          }
        }
      }
    `
  )
  const site = data.site.siteMetadata
  return (
    <>
      <SEO
        title={`Credits | ${site.title}`}
        crawl={false}
      />
      <CreditsPage />
    </>
  )
}
