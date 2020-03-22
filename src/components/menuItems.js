import React, { Component } from 'react'
import Data from '../../gatsby-data.js'
import Anchor from './anchor'
import '../styles/menu.scss'

const Navigation = Data.navigation

const LinkedItem = ({ item, active }) => {
  const { to, name } = item

  return (
    <Anchor
      to={to}
      className={`item ${active ? `active` : ``}`}
    >
      {name}
    </Anchor>
  )
}

const Items = ({ path }) => {
  return Navigation.map(item => {
    const key = item.name.replace(/ /g, "")
    const isActive = path === item.to || path.startsWith(`${item.to}/`)
    return (
      <LinkedItem
        key={key}
        item={item}
        active={isActive}
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
