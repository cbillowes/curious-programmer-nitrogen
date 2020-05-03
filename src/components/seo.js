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
  const siteTitle = siteMetadata.title || ``
  if (title && siteTitle) return `${title} | ${siteTitle}`
  return siteTitle
}

const getPageDescription = (description, siteMetadata) => {
  const pageDescription = description || siteMetadata.description || ``
  return getContent(30, pageDescription)
}

const getAuthor = (siteMetadata) => {
  return siteMetadata.twitter || ``
}

const getImage = (image, siteMetadata) => {
  const url = siteMetadata.siteUrl
  const share = image || siteMetadata.image
  if (url)
    return `${url}${share}`
  return ``
}

const SEO = ({ title, crawl, siteMetadata, image, children }) => {
  const metadata = siteMetadata || {}
  const pageTitle = getPageTitle(title, metadata)
  const pageDescription = getPageDescription(children, metadata)
  const pageAuthor = getAuthor(metadata)
  const pageImage = getImage(image, metadata)
  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      {crawl ? (<meta name="robots" content="index" />) : (<meta name="robots" content="noindex" />)}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:author" content={pageAuthor} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
      <meta property="twitter:card" content="summary" />
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
