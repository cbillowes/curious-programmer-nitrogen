/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const PureSEO = ({ title, description, data }) => {
  const lang = data.siteMetadata.lang
  const pageTitle = title ? `${title} | ${data.siteMetadata.title}` : data.siteMetadata.title
  const pageDescription = description || data.siteMetadata.description
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

export const SEO = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  )
  return (
    <PureSEO
      {...props}
      data={data.site}
    />
  )
}

SEO.defaultProps = {
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default SEO