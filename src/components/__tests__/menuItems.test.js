import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Constants from './const'
import MenuItems from '../menuItems'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu items', () => {

   it ('should render', () => {
    const wrapper = shallow(
      <MenuItems />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<nav`)).toBe(true)
  }) 
  
  it ('should render active item', () => {
    const wrapper = shallow(
      <MenuItems path="/blog" />
    )

    console.log(Constants.ACTIVE_MENU_ITEM_CLASS)
    console.log(wrapper.html())
    const rendered = wrapper.html()
    expect(rendered.indexOf(`<span class="${Constants.ACTIVE_MENU_ITEM_CLASS}"><a href="/blog">Blog</a></span>`)).toBeGreaterThan(-1)
  })

})
