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
        title={`Credits & Resources | ${site.title}`}
        crawl={true}
      >
        I share a bunch of services, plugins, tools and stuff to help
        make my blog what it is today.
      </SEO>
      <CreditsPage />
    </>
  )
}
