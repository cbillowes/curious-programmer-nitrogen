import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Constants from '../../gatsby-data'
import './styles/layout.scss'

const site = Constants.site

const Layout = ({ className, reading, footer, children }) => {
  return (
    <div className="page">
      <Header siteTitle={site.title} />
      <section className={`container ${reading ? `reading` : ``} ${className}`}>
        {children}
      </section>
      {
        footer === `hidden` ?
        <></> :
        <Footer />
      }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
