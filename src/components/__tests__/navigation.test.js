import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues, containsElement } from './helpers'
import Navigation from '../navigation'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Navigation 
      isOpen={props.isOpen} 
      path={props.path} 
    />
  )
}

describe('Navigation', () => {
  it('should open the navigation bar', () => {
    const validation = validateValues(
      sut({
        isOpen: true,
      }),
      [
        {contains: true, value: `data-container="navigation"`},
        {contains: true, value: `open`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should close the navigation bar', () => {
    const validation = validateValues(
      sut({
        isOpen: false,
      }),
      [
        {contains: true, value: `data-container="navigation"`},
        {contains: true, value: `closed`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should set active item', () => {
    const contains = containsElement(
      sut({
        isOpen: true,
        path: "/about",
      }),
      <a data-selected={true} href="/about">About</a>, 
    )
    expect(contains).toBe(true)
  })

  it('should activate /blog for /', () => {
    const contains = containsElement(
      sut({
        isOpen: true,
        path: "/",
      }),
      <a data-selected={true} href="/blog">Blog</a>, 
    )
    expect(contains).toBe(true)
  })
})
