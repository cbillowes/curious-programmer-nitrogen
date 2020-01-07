import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue, doesNotContainValue } from './helpers'
import Constants from './const'
import Menu from '../menu'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Menu
      isOpen={props.isOpen}
    />
  )
}

describe('Menu', () => {

  it('should render the menu icon', () => {
    const contains = containsValue(
      sut({}), 
      `${Constants.MENU_ICON_CLASS}`,
    )
    expect(contains).toBe(true)
  })
  
  it('should activate the menu when open', () => {
    const contains = containsValue(
      sut({
        isOpen: true,
      }),
      `active`,
    )
    expect(contains).toBe(true)
  })

  it('should not activate the menu when closed', () => {
    const notContains = doesNotContainValue(
      sut({}),
      `active`,
    )
    expect(notContains).toBe(true)
  })

})
