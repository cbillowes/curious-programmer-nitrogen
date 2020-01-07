import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue, doesNotContainValue } from './helpers'
import Constants from './const'
import Search from '../search'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Search
      isOpen={props.isOpen}
    />
  )
}

describe('Search', () => {

  it('should render the search icon', () => {
    const contains = containsValue(
      sut({}), 
      `${Constants.SEARCH_ICON_CLASS}`,
    )
    expect(contains).toBe(true)
  })
  
  it('should activate the search when open', () => {
    const contains = containsValue(
      sut({
        isOpen: true,
      }),
      `active`,
    )
    expect(contains).toBe(true)
  })

  it('should not activate the search when closed', () => {
    const notContains = doesNotContainValue(
      sut({}),
      `active`,
    )
    expect(notContains).toBe(true)
  })

})
