import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from "./menu"
import MenuItems from "./menuItems"

const Container = styled.span``

const MenuItemsWrapper = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  left: 0;
  right: 0;
`

class Navigation extends Component {
  constructor(props) {
    super(props)

    const location = props.location || window.location.pathname
    const path = (location === "/" || !location) ? "/blog" : location
    this.state = {
      open: false,
      path: path,
    }
  }

  render() {
    console.log("navigation")
    return (
      <Container>
        <Menu onClick={this.props.toggle} />
        <MenuItemsWrapper>
          <MenuItems path={this.state.path} open={this.state.open} />
        </MenuItemsWrapper>
      </Container>
    )
  }
}

export default Navigation
