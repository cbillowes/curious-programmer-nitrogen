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

const SEO = ({ title, description, crawl, data }) => {
  const lang = data.siteMetadata.lang
  const pageTitle = title ? `${title} | ${data.siteMetadata.title}` : data.siteMetadata.title
  const pageDescription =
    getContent(25,
      (typeof description === `string` ? description : undefined) ||
      data.siteMetadata.description
    )
  const author = data.siteMetadata.author

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
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
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:card" content="summary" />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: ``,
  crawl: false,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  crawl: PropTypes.bool,
  description: PropTypes.string,
}

export default SEO
