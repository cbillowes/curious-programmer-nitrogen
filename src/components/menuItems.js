import React from "react"
import PropTypes from "prop-types"
import Data from "../../gatsby-data.js"
import MenuItem from "./menuItem"
import "../styles/menu.scss"

const Navigation = Data.navigation

const getKey = name => {
  return name.replace(/ /g, ``)
}

const getActivePath = ({ to }) => {
  const defaultPath = Navigation[0].to
  const location = typeof window === `undefined` ? `` : window.location.pathname
  const current = location || defaultPath
  return current === to || current.startsWith(`${to}/`)
}

const Items = ({ toggleOnClick }) => {
  return Navigation.map(item => {
    const key = getKey(item.name)
    const active = getActivePath(item)
    return (
      <MenuItem
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
      <Items toggleOnClick={toggleOnClick} />
    </div>
  )
}

export default MenuItems

MenuItems.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
}
