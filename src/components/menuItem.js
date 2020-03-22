import React from 'react'
import PropTypes from 'prop-types'
import Anchor from './anchor'
import '../styles/menu-item.scss'

function toggleDisplay(e, toggleOnClick) {
  e.preventDefault()
  toggleOnClick(e)
}

const MenuItem = ({ item, active, toggleOnClick }) => {
  const { to, name } = item
  if (active) {
    return (
      <div
        role="button"
        className="menu-item active"
        onClick={e => toggleDisplay(e, toggleOnClick)}
      >
        {name}
      </div>
    )
  }

  return (
    <Anchor
      to={to}
      className="menu-item"
    >
      {name}
    </Anchor>
  )
}

export default MenuItem

MenuItem.defaultTypes = {
  active: false,
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  toggleOnClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
}
