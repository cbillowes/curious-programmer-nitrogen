import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from './helpers'
import Constants from './const'
import Navigation from '../navigation'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return <Navigation 
            isOpen={props.isOpen} 
            path={props.path} />
}

describe('Navigation', () => {
  it('should open the navigation bar', () => {
    const contains = containsValue(
      sut({
        isOpen: true,
      }),
      `<nav class="${Constants.NAVIGATION_CLASS} open`,
    )
    expect(contains).toBe(true)
  })

  it('should close the navigation bar', () => {
    const contains = containsValue(
      sut({
        isOpen: false,
      }),
      `<nav class="${Constants.NAVIGATION_CLASS} closed`,
    )
    expect(contains).toBe(true)
  })

  it('should set active item', () => {
    const contains = containsValue(
      sut({
        isOpen: true,
        path: "/about",
      }),
      `<span class="${Constants.SELECTED_MENU_ITEM_CLASS}"><a href="/about">About</a></span>`, 
    )
    expect(contains).toBe(true)
  })

  it('should activate /blog for /', () => {
    const contains = containsValue(
      sut({
        isOpen: true,
        path: "/",
      }),
      `<span class="${Constants.SELECTED_MENU_ITEM_CLASS}"><a href="/blog">Blog</a></span>`, 
    )
    expect(contains).toBe(true)
  })
})
