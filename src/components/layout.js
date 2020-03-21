import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import Header from './header'
import Footer from './footer'
import Constants from '../../gatsby-data'
import '../styles/layout.scss'

const site = Constants.site

const Layout = ({ className, reading, footer, children }) => {
  // The definitive guide for using PrismJs in Gatsby
  // https://dev.to/fidelve/the-definitive-guide-for-using-prismjs-in-gatsby-4708
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className="page">
      <Header siteTitle={site.title} />
      <section className={`container ${reading ? `reading` : ``} ${className}`}>
        {children}
      </section>
      {
        footer ? <Footer /> : <></>
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  reading: PropTypes.bool,
  footer: PropTypes.bool,
}

export default Layout
