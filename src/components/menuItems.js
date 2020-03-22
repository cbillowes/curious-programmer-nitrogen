import React from 'react'
import PropTypes from 'prop-types'
import Data from '../../gatsby-data.js'
import Anchor from './anchor'
import '../styles/menu.scss'

const Navigation = Data.navigation

function toggleDisplay(e, toggleOnClick) {
  e.preventDefault()
  toggleOnClick(e)
}

const getKey = name => {
  return name.replace(/ /g, ``)
}

const getActivePath = ({ to }) => {
  const defaultPath = Navigation[0].to
  const location = typeof window === `undefined` ? `` : window.location.pathname
  const current = location || defaultPath
  return current === to || current.startsWith(`${to}/`)
}

const Item = ({ item, active, toggleOnClick }) => {
  const { to, name } = item
  if (active) {
    return (
      <div
        role="button"
        className="item active"
        onClick={e => toggleDisplay(e, toggleOnClick)}
      >
        {name}
      </div>
    )
  }

  return (
    <Anchor
      to={to}
      className="item"
    >
      {name}
    </Anchor>
  )
}

const Items = ({ toggleOnClick }) => {
  return Navigation.map(item => {
    const key = getKey(item.name)
    const active = getActivePath(item)
    return (
      <Item
        key={key}
        item={item}
        active={active}
        toggleOnClick={toggleOnClick}
      />
    )
  })
}

const MenuItems = ({ toggleOnClick }) => {
  return (
    <div className="menu">
      <Items
        toggleOnClick={toggleOnClick}
      />
    </div>
  )
}

export default MenuItems

MenuItems.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
}
