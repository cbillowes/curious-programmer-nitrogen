import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from "./helpers"
import Constants from './const'
import Search from '../search'

Enzyme.configure({ adapter: new Adapter() })

describe('Search', () => {

  it('should render the search icon', () => {
    const contains = containsValue(
      <Search />, 
      `${Constants.SEARCH_ICON_CLASS}`
    )
    expect(contains).toBe(true)
  })
  
  it('should activate the search when open', () => {
    const contains = containsValue(
      <Search isOpen={true} />,
      `active`
    )
    expect(contains).toBe(true)
  })

  it('should not activate the search when closed', () => {
    const contains = containsValue(
      <Search />,
      `active`
    )
    expect(contains).toBe(false)
  })

})
