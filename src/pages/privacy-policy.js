import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import PrivacyPolicyPage from '../components/pages/privacy-policy'

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
        title="Privacy Policy"
        crawl={false}
        siteMetadata={siteMetadata}
      />
      <PrivacyPolicyPage />
    </>
  )
}
