import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../styles/search.scss'

const Search = ({ toggleOnClick, isOpen }) => {
  return (
    <button
      onClick={toggleOnClick}
      className={(isOpen) ? `search-button active` : `search-button`}
    >
      <FontAwesomeIcon
        icon={faSearch}
      />
    </button>
  )
}

Search.defaultProps = {
  isOpen: false,
}

Search.propTypes = {
  toggleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

export default Search
