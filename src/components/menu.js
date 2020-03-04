import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './styles/menu.scss'

const Menu = ({ toggleOnClick, isOpen }) => {
  return (
    <button
      onClick={toggleOnClick}
      className={(isOpen) ? `menu-button active` : `menu-button`}
    >
      <FontAwesomeIcon
        icon={faEllipsisV}
      />
    </button>
  )
}

Menu.defaultProps = {
  isOpen: false,
}

Menu.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

export default Menu
