import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './styles/menu.scss'

const Menu = ({ toggleOnClick, isOpen }) => {
  return (
    <div 
      onClick={toggleOnClick} 
      className={(isOpen) ? `menu-button active`: `menu-button`}
    >
      <FontAwesomeIcon
        icon={faEllipsisV}
      />
    </div>
  )
}

export default Menu
