import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from './helpers'
import Constants from './const'
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
    const contains = containsValue(
      sut({
        isOpen: true,
      }),
      `<section class="${Constants.SEARCH_CLASS} open`,
    )
    expect(contains).toBe(true)
  })

  it('should close the search bar', () => {
    const contains = containsValue(
      sut({
        isOpen: false,
      }),
      `<section class="${Constants.SEARCH_CLASS} closed`,
    )
    expect(contains).toBe(true)
  })
})
