import React, { Component } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import data from "../../gatsby-data.js"

const Theme = data.theme
const Navigation = data.navigation

const Container = styled.nav`
  padding: 1em 0;
  background-color: ${Theme.colors.darkest};

  &.open {
    transform: translateX(0);
    transition: transform .5s ease-in-out;
  }

  &.closed {
    transform: translateX(100%);
    transition: transform .5s ease-in-out;
  }
`

const Item = styled.span`
  font-family: ${Theme.fonts.navigation};

  a {
    color: ${Theme.colors.lightest};
    display: block;
    text-align: right;
    padding: .5em 2em;
    text-decoration: none;
  }

  a:hover {
    background-color: ${Theme.colors.accentFirst};
    color: ${Theme.colors.darkest};
  }
`

const ActiveItem = styled(Item)`
  a {
    background-color: ${Theme.colors.accentSecond};
    color: ${Theme.colors.lightest};
    font-weight: bold;
  }
`

const LinkedItem = ({ item, className }) => {
  if (item.external) {
    return <Item><a href={item.to}>{item.name}</a></Item>
  }

  if (className === 'active') {
    return <ActiveItem>{item.name}</ActiveItem>
  }
  
  return <Item>{item.name}</Item>
}

const Items = ({ path }) => {
  return Navigation.map((item) => {
    const key = item.name.replace(/ /g, '')
    return <LinkedItem key={key} item={item} className={(path === item.to ? 'active': '')} />
  })
}

class MenuItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: props.path,
    }
  }

  getState = (open) => {
    return open ? 'open' : 'closed'
  }

  activateItem = (path) => {
    console.log(path)
  }

  render() {
    const state = this.getState(this.props.open)
    const path = this.props.path
    return (
      <Container className={state}>
        <Items path={path} />
      </Container>      
    )
  }
}

export default MenuItems
