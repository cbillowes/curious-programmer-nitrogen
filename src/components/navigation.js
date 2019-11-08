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
  constructor(props) {
    super(props)

    const { path, open } = this.props
    const pathname = this.getPathname(path)
    this.state = {
      path: pathname,
      open: open
    }
  }

  getPathname(path) {
    const rootPath = `/`
    const defaultPath = Nav[0].to
    const pathname = path || window.location.pathname
    return pathname === rootPath || !pathname ? defaultPath: pathname 
  }

  getVisibilityClassName() {
    return this.state.open ? `open` : `closed`
  }

  render() {
    return (
      <>
        <Menu />
        <Container className={this.getVisibilityClassName()}>
          <MenuItems path={this.state.path} />
        </Container>
      </>
    )
  }
}

export default Navigation
