import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues, containsValue } from './helpers'
import SearchBar from '../searchBar'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <SearchBar 
      isOpen={props.isOpen} 
    />
  )
}

describe('Search bar', () => {
  it('should open the search bar', () => {
    const validation = validateValues(
      sut({
        isOpen: true,
      }),
      [
        {contains: true, value: `data-container="search-bar"`},
        {contains: true, value: `open`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should close the search bar', () => {
    const validation = validateValues(
      sut({
        isOpen: false,
      }),
      [
        {contains: true, value: `data-container="search-bar"`},
        {contains: true, value: `closed`},
      ]
    )
    expect(validation).toBe(true)
  })
})
