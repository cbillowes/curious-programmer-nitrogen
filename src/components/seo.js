/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { getContent } from "./blurb"

const getPageTitle = (title, siteMetadata) => {
  return title || siteMetadata.title
}

const getPageDescription = (description, siteMetadata) => {
  const pageDescription = description || siteMetadata.description || ``
  return getContent(30, pageDescription)
}

const getImage = (image, siteMetadata) => {
  const url = siteMetadata.siteUrl
  const share = image || siteMetadata.image
  return `${url}${share}`
}

const SEO = ({ title, type, crawl, siteMetadata, image, children }) => {
  const metadata = siteMetadata || {}
  const pageTitle = getPageTitle(title, metadata)
  const pageDescription = getPageDescription(children, metadata)
  const pageImage = getImage(image, metadata)
  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="type" content={type} />

      {crawl ? (
        <meta name="robots" content="index" />
      ) : (
        <meta name="robots" content="noindex" />
      )}

      <meta property="og:site_name" content={metadata.brand} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="summary" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content={metadata.handle} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
    </Helmet>
  )
}

SEO.defaultProps = {
  crawl: false,
}

SEO.propTypes = {
  title: PropTypes.string,
  siteMetadata: PropTypes.object,
  crawl: PropTypes.bool,
  children: PropTypes.node,
}

export default SEO
