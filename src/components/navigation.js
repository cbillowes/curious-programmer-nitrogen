import React, { Component } from 'react'
import Menu from './menu'
import MenuItems from "./menuItems"
import Data from '../../gatsby-data'
import './styles/menu.scss'

const Nav = Data.navigation

class Navigation extends Component {
  getPathName(path) {
    const rootPath = `/`
    const defaultPath = Nav[0].to
    const pathname = path || (typeof window === "undefined" || !window ? "/" : window.location.pathname)
    return pathname === rootPath || !pathname ? defaultPath: pathname 
  }

  getClassName(open) {
    return `navigation ${open ? `open` : `closed`}`
  }

  render() { 
    const { toggleOnClick, isOpen, path } = this.props
    return (
      <>
        <Menu 
          toggleOnClick={toggleOnClick} 
          isOpen={isOpen} 
        />
        <nav
          data-container="navigation"
          className={this.getClassName(isOpen)}
        >
          <MenuItems 
            path={this.getPathName(path)} 
          />
        </nav>
      </>
    )
  }
}

export default Navigation
