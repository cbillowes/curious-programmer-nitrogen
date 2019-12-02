import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from './helpers'
import SearchBar from '../searchBar'

Enzyme.configure({ adapter: new Adapter() })

describe('Search bar', () => {
  it('should open the search bar', () => {
    const contains = containsValue(
      <SearchBar isOpen={true} />,
      `<section class="open `,
    )
    expect(contains).toBe(true)
  })

  it('should close the search bar', () => {
    const contains = containsValue(
      <SearchBar isOpen={false} />,
      `<section class="closed `,
    )
    expect(contains).toBe(true)
  })
})
