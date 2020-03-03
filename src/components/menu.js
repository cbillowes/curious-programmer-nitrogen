import React from 'react'
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

export default Menu

//TODO: add proptypes