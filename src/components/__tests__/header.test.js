import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Header from '../header'
import Logo from '../logo'
import Search from '../search'
import Menu from '../menu'
import Navigation from '../navigation'

Enzyme.configure({ adapter: new Adapter() })

describe('Header', () => {
  it('should render the logo', () => {
    const contains = containsElement(
      <Header />,
      <Logo />,
    )
    expect(contains).toBe(true)
  })

  it('should render the search button', () => {
    const contains = containsElement(
      <Header />,
      <Search />,
    )
    expect(contains).toBe(true)
  })

  it('should render the menu button', () => {
    const contains = containsElement(
      <Header />,
      <Menu />,
    )
    expect(contains).toBe(true)
  })

  it('should render the navigation', () => {
    const contains = containsElement(
      <Header />,
      <Navigation />,
    )
    expect(contains).toBe(true)
  })
})
