import React, { Component } from "react"
import styled from "styled-components"
import Menu from "./menu"
import MenuItems from "./menuItems"
import Data from "../../gatsby-data"

const Nav = Data.navigation
const Theme = Data.theme

const Container = styled.nav`
  padding: 1em 0;
  background-color: ${Theme.colors.darkest};
  position: absolute;
  margin-top: 1.5rem;
  left: 0;
  right: 0;
  height: 100vh;

  &.open {
    transform: translateX(0);
    transition: transform .5s ease-in-out;
  }

  &.closed {
    transform: translateX(100%);
    transition: transform .5s ease-in-out;
  }
`

class Navigation extends Component {
  getPathname(path) {
    const rootPath = `/`
    const defaultPath = Nav[0].to
    const pathname = path || (typeof window === "undefined" || !window ? "/" : window.location.pathname)
    return pathname === rootPath || !pathname ? defaultPath: pathname 
  }

  getVisibilityClassName(open) {
    return open ? `open` : `closed`
  }

  render() { 
    return (
      <>
        <Menu toggleOnClick={this.props.toggleOnClick} isOpen={this.props.isOpen} />
        <Container className={this.getVisibilityClassName(this.props.isOpen)}>
          <MenuItems path={this.getPathname(this.props.path)} />
        </Container>
      </>
    )
  }
}

export default Navigation
