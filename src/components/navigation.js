import React from 'react'
import PropTypes from 'prop-types'
import Menu from './menu'
import MenuItems from './menuItems'
import '../styles/navigation.scss'

function toggleDisplay(e, toggleOnClick) {
  e.preventDefault()
  toggleOnClick(e)
}

const displayAs = isOpen => {
  return `navigation ${isOpen ? `open` : `closed`}`
}

const Navigation = ({ toggleOnClick, isOpen }) => {
  return (
    <>
      <Menu
        toggleOnClick={e => toggleDisplay(e, toggleOnClick)}
        isOpen={isOpen}
      />
      <nav
        className={displayAs(isOpen)}
      >
        <MenuItems
          toggleOnClick={e => toggleDisplay(e, toggleOnClick)}
        />
      </nav>
    </>
  )
}

Navigation.defaultProps = {
  isOpen: false,
}

Navigation.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

export default Navigation
