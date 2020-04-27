import React from "react"
import PropTypes from "prop-types"
import Anchor from "./anchor"
import "../styles/menu-item.scss"

function toggleDisplay(e, toggleOnClick) {
  e.preventDefault()
  toggleOnClick(e)
}

const MenuItem = ({ item, active, toggleOnClick }) => {
  const { to, name } = item
  if (active) {
    return (
      <a
        role="button"
        tabIndex="0"
        className="menu-item active"
        href="/#"
        onKeyUp={e =>
          e.keyCode === 32 ? toggleDisplay(e, toggleOnClick) : function() {}
        }
        onClick={e => toggleDisplay(e, toggleOnClick)}
      >
        {name}
      </a>
    )
  }

  return (
    <Anchor to={to} className="menu-item">
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
