import React from 'react'
import SEO from '../components/seo'
import PrivacyPolicyPage from '../components/pages/privacy-policy'

export default () => (
  <>
    <SEO
      title="Privacy Policy"
      crawl={false}
    />
    <PrivacyPolicyPage />
  </>
)
