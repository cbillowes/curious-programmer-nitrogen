import React, { Component } from 'react'
import Data from '../../gatsby-data.js'
import Anchor from './anchor'
import './styles/menu.scss'

const Navigation = Data.navigation

const LinkedItem = ({ item, active }) => {
  const { to, name } = item

  return (
    <Anchor
      to={to}
      className={`item ${active ? `active` : ``}`}
      data-selected={active}
    >
      {name}
    </Anchor>
  )
}

const Items = ({ path }) => {
  return Navigation.map(item => {
    const key = item.name.replace(/ /g, "")
    return (
      <LinkedItem
        key={key}
        item={item}
        active={path === item.to}
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
      <div className="menu">
        <Items
          path={path}
        />
      </div>
    )
  }
}

export default MenuItems