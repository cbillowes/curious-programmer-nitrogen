import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { elementStartsWith, containsValue } from './helpers'
import Constants from './const'
import Logo from '../logo'

Enzyme.configure({ adapter: new Adapter() })

describe('Logo', () => {

  it('should render', () => {
    const doesStartWith = elementStartsWith(
      <Logo />,
      `<div `,
    )
    expect(doesStartWith).toBe(true)
  })

  it('should link to the home page', () => {
    const contains = containsValue(
      <Logo />,
      `href="/"`,
    )
    expect(contains).toBe(true)
  })

  it('should render the logo content', () => {
    const contains = containsValue(
      <Logo />,
      `${Constants.LOGO}`,
    )
    expect(contains).toBe(true)
  })

})
