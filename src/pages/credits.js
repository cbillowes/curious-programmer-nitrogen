import React from "react"
import SEO from "../components/seo"
import CreditsPage from "../components/pages/credits"

export default () => (
  <>
    <SEO
      title="Credits"
      crawl={false}
    />
    <CreditsPage />
  </>
)
