/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { getContent } from "./blurb"

const getPageTitle = (title, siteMetadata) => {
  if (title && siteMetadata && siteMetadata.title)
    return `${title} | ${siteMetadata.title}`

  if (!title && siteMetadata && siteMetadata.title)
    return siteMetadata.title

  return title
}

const getPageDescription = (description, siteMetadata) => {
  const pageDescription =
    (description) ? description :
      (siteMetadata && siteMetadata.description) ? siteMetadata.description :
        ``
  return getContent(25, pageDescription)
}

const SEO = ({ title, crawl, siteMetadata, children }) => {
  const pageTitle = getPageTitle(title, siteMetadata)
  const pageDescription = getPageDescription(children, siteMetadata)
  const pageAuthor = siteMetadata && siteMetadata.author ? siteMetadata.author : ``
  return (
    <Helmet>
      <title>{pageTitle}</title>

      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      {
        crawl ?
          <meta name="robots" content="index" /> :
          <meta name="robots" content="noindex" />
      }

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:author" content={pageAuthor} />
      <meta property="twitter:description" content={pageDescription} />
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
