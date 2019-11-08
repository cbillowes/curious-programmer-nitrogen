import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Constants from './const'
import Navigation from '../menuItems'

Enzyme.configure({ adapter: new Adapter() })

describe('Navigation', () => {

   it ('should render', () => {
    const wrapper = shallow(
      <Navigation />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<nav`)).toBe(true)
  }) 

  it('should render default menu item', () => {
    const wrapper = shallow(
      <Navigation path="/" />
    )

    const rendered = wrapper.html()
    expect(rendered.indexOf(`<span class="${Constants.ACTIVE_MENU_ITEM_CLASS}"><a href="/blog">Blog</a></span>`)).toBeGreaterThan(-1)
  })
  
  it ('should render active item', () => {
    const wrapper = shallow(
      <Navigation path="/privacy-policy" />
    )

    const rendered = wrapper.html()
    expect(rendered.indexOf(`<span class="${Constants.ACTIVE_MENU_ITEM_CLASS}"><a href="/privacy-policy">Privacy Policy</a></span>`)).toBeGreaterThan(-1)
  })

  it ('should open menu items', () => {
    const wrapper = shallow(
      <Navigation open="true" />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<nav class="${Constants.OPEN_MENU_CLASS}">`)).toBe(true)
  })

  it ('should close menu items', () => {
    const wrapper = shallow(
      <Navigation open="false" />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<nav class="${Constants.CLOSED_MENU_CLASS}">`)).toBe(true)
  })
})
