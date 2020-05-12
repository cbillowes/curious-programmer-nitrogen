import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import LicensePage from "../components/pages/license"

export default () => {
  const data = useStaticQuery(
    graphql`
      query LicensePageQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            brand
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
        type="website"
        crawl={false}
        siteMetadata={siteMetadata}
      />
      <LicensePage />
    </>
  )
}
