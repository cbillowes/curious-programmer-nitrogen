import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles/search.scss'

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

export default Search
