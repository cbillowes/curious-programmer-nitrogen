import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from './helpers'
import Constants from './const'
import Menu from '../menu'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu', () => {

  it('should render the menu icon', () => {
    const contains = containsValue(
      <Menu />, 
      `${Constants.MENU_ICON_CLASS}`,
    )
    expect(contains).toBe(true)
  })
  
  it('should activate the menu when open', () => {
    const contains = containsValue(
      <Menu isOpen={true} />,
      `active`,
    )
    expect(contains).toBe(true)
  })

  it('should not activate the menu when closed', () => {
    const contains = containsValue(
      <Menu />,
      `active`,
    )
    expect(contains).toBe(false)
  })

})
