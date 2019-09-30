import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import data from "../../gatsby-data.js"

const Theme = data.theme
const MenuItems = data.navigation

const Container = styled.nav`
  padding: 1em 0;
  background-color: ${Theme.colors.darkest};
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
  }
`

const LinkedItem = ({ item, className }) => {
  if (item.external)
    return <Item><a href={item.to}>{item.name}</a></Item>

  if (className === "active")
    return <ActiveItem><Link to={item.to}>{item.name}</Link></ActiveItem>
    return <Item><Link to={item.to}>{item.name}</Link></Item>
}

const Items = ({ path }) => {
  return MenuItems.map((item) => {
    const key = item.name.replace(/ /g, "")
    const className = (path === item.to) ? "active": "";
    return <LinkedItem key={key} item={item} className={className} />
  })
}

const Navigation = ({ path }) => {
  return (
    <Container>
      <Items path={path} />
    </Container>
  )
}

export default Navigation
