import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import CreditsPage from "../components/pages/credits"

export default () => {
  const data = useStaticQuery(
    graphql`
      query CreditPageQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <SEO title="Check out all the cool stuff I use." crawl={true} siteMetadata={siteMetadata}>
        A lot of things go into making this blog. They make me happy. I have
        created a list of these libraries, frameworks, services, plugins, tools
        and stuff.
      </SEO>
      <CreditsPage />
    </>
  )
}
