import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import MenuItems from './menuItems'
import Data from '../../gatsby-data'
import '../styles/navigation.scss'

const Nav = Data.navigation

function getNavigationClassName(isOpen) {
  return `navigation ${isOpen ? `open` : `closed`}`
}

export const Navigation = ({ toggleOnClick, isOpen, path }) => {
  const defaultPath = Nav[0].to
  const location = typeof window !== `undefined` ? window.location.pathname : `/`
  const currentPath = location || path || defaultPath

  return (
    <>
      <Menu
        toggleOnClick={toggleOnClick}
        isOpen={isOpen}
      />
      <nav
        className={getNavigationClassName(isOpen)}
      >
        <MenuItems
          path={currentPath}
        />
      </nav>
    </>
  )
}

Navigation.defaultProps = {
  isOpen: false,
  path: `/`,
}

Navigation.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  path: PropTypes.string,
}

export default Navigation

//TODO: keep data.nav? maybe?
//TODO: click on active menu item does not close menu
