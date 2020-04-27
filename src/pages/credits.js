import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import CreditsPage from "../components/pages/credits"

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
      <SEO title="Credits & Resources" crawl={true} siteMetadata={siteMetadata}>
        A lot of things go into making this blog. They make me happy. I have
        created a list of these libraries, frameworks, services, plugins, tools
        and stuff.
      </SEO>
      <CreditsPage />
    </>
  )
}
