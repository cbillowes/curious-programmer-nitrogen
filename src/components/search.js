import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import data from "../../gatsby-data.js"

const colors = data.theme.colors
const buttons = data.theme.buttons

const Container = styled.span`
  cursor: pointer;
  margin-left: .5em;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: inline-block;
  color: ${colors.lightest};
  background-color: ${colors.darkest};

  :hover {
    background-color: ${buttons.hover};
  }

  &.active {
    background-color: ${buttons.active.static};
  }

  &.active:hover {
    background-color: ${buttons.active.hover};
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin: 15px;
  font-size: 30px;
  display: inline-block;
`

const Search = ({toggleOnClick, isOpen}) => {
  return (
    <Container 
      onClick={toggleOnClick} 
      className={isOpen ? `active` : ``}
    >
      <Icon 
        icon={faSearch} 
      />
    </Container>
  )
}

export default Search
