import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue } from './helpers'
import Constants from './const'
import Navigation from '../navigation'
import Data from '../../../gatsby-data'

Enzyme.configure({ adapter: new Adapter() })

describe('Navigation', () => {
  it('should open the navigation bar', () => {
    const contains = containsValue(
      <Navigation isOpen={true} />,
      `<nav class="open `,
    )
    expect(contains).toBe(true)
  })

  it('should close the navigation bar', () => {
    const contains = containsValue(
      <Navigation isOpen={false} />,
      `<nav class="closed `,
    )
    expect(contains).toBe(true)
  })

  it('should set active item', () => {
    const contains = containsValue(
      <Navigation path="/about" />,
      `<span class="${Constants.SELECTED_MENU_ITEM_CLASS}"><a href="/about">About</a></span>`, 
    )
    expect(contains).toBe(true)
  })

  it('should activate /blog for /', () => {
    const contains = containsValue(
      <Navigation path="/" />,
      `<span class="${Constants.SELECTED_MENU_ITEM_CLASS}"><a href="/blog">Blog</a></span>`, 
    )
    expect(contains).toBe(true)
  })
})
