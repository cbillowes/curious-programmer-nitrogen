import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { elementStartsWith, containsValue } from './helpers'
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
    const logo = `<strong>{</strong> :curious <strong>&quot;programmer&quot;</strong> <strong>}</strong>`
    const contains = containsValue(
      <Logo />,
      logo,
    )
    expect(contains).toBe(true)
  })

})
