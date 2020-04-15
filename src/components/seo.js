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

const SEO = ({ title, crawl, lang, author, children }) => {
  const description = description ? getContent(25, children) : ``

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {
        crawl ?
          <meta name="robots" content="index" /> :
          <meta name="robots" content="noindex" />
      }

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
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
  lang: PropTypes.string,
  author: PropTypes.string,
  children: PropTypes.node,
}

export default SEO
