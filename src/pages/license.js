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
            title
            image
          }
        }
      }
    `
  )
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <SEO
        title="License"
        crawl={false}
        siteMetadata={siteMetadata}
      />
      <LicensePage />
    </>
  )
}
