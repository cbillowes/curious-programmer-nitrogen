import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import LicensePage from '../components/pages/license'

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
        title={`License | ${site.title}`}
        crawl={false}
      />
      <LicensePage />
    </>
  )
}
