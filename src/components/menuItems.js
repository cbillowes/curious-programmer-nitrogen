import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Data from "../../gatsby-data.js"

const Theme = Data.theme
const Navigation = Data.navigation

const Item = styled.span`
  font-family: ${Theme.fonts.sans};

  a {
    color: ${Theme.colors.lightest};
    display: block;
    text-align: center;
    padding: 0.5em 2em;
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
    return (
      <Item>
        <a 
          href={item.to}
        >
          {item.name}
        </a>
      </Item>
    )
  }

  if (className === "active") {
    return (
      <ActiveItem>
        <Link 
          to={item.to}
          data-selected={true}
        >
          {item.name}
        </Link>
      </ActiveItem>
    )
  }

  return (
    <Item>
      <Link 
        to={item.to}
      >
        {item.name}
      </Link>
    </Item>
  )
}

const Items = ({ path }) => {
  return Navigation.map(item => {
    const key = item.name.replace(/ /g, "")
    return (
      <LinkedItem
        key={key}
        item={item}
        className={path === item.to ? "active" : ""}
      />
    )
  })
}

class MenuItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: props.path
    }
  }

  render() {
    const { path } = this.props
    return (
      <Items 
        path={path} 
      />
    )
  }
}

export default MenuItems
