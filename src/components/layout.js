import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import Constants from '../../gatsby-data'
import './layout.css'

const site = Constants.site
const colors = Constants.theme.colors
const fonts = Constants.theme.fonts

const Site = styled.div`
  background-color: ${colors.dark};
  color: ${colors.light};
  font-family: ${fonts.serif};
  line-height: 2.5rem;

  h1, h2, h3, h4 {
    font-weight: 800;
    font-family: ${fonts.sans};
    line-height: 3rem;
  }

  ul {
    line-height: 2.5rem;
  }

  .page-container {
    max-width: 1024px;
    margin: 0 auto;
    padding-bottom: 3rem;
    padding-top: 6%;
  }
`

const Layout = ({ className, footer, children }) => {
  const containerClassName = `page-container ${className}`
  return (
    <Site>
      <Header siteTitle={site.title} />
      <main className={containerClassName}>
        {children}
      </main>
      {
        footer === `hidden` ?
        <></> :
        <Footer />
      }
    </Site>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
