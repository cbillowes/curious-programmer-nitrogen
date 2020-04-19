/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { getContent } from './blurb'

const getTitle = (data, pageTitle) => {
  const siteTitle = (data && data.siteMetadata) ? data.siteMetadata.title : ``
  if (pageTitle && siteTitle) return `${pageTitle} | ${siteTitle}`
  if (pageTitle) return pageTitle
  return siteTitle
}

const getDescription = (data, pageDescription) => {
  const limit = 25
  if (data && data.siteMetadata && data.siteMetadata.description)
    return getContent(limit, data.siteMetadata.description)
  if (pageDescription)
    return getContent(limit, pageDescription)
  return ``
}

const SEO = ({ title, crawl, data, children }) => {
  const seoTitle = getTitle(data, title)
  const seoDescription = getDescription(data, children)
  const seoAuthor = data && data.siteMetadata ? data.siteMetadata.author : ``
  const seoLang = data && data.siteMetadata ? data.siteMetadata.lang : ``
  return (
    <Helmet
      htmlAttributes={{
        seoLang,
      }}
    >
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />

      {
        crawl ?
          <meta name="robots" content="index" /> :
          <meta name="robots" content="noindex" />
      }

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:author" content={seoAuthor} />
      <meta property="twitter:card" content="summary" />
    </Helmet>
  )
}

SEO.defaultProps = {
  crawl: false,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  crawl: PropTypes.bool,
  data: PropTypes.object,
  children: PropTypes.node,
}

export default SEO
