import React from 'react'
import Navigation from '../navigation'
import { getSnapshot } from './_helpers'

describe(`Navigation`, () => {
  const toggleOnClick = jest.fn()

  it(`should render default navigation`, () => {
    const navigation = (
      <Navigation
        toggleOnClick={() => toggleOnClick}
      />
    )
    const tree = getSnapshot(navigation)
    expect(tree).toMatchSnapshot()
  })

  it(`should render open navigation`, () => {
    const navigation = (
      <Navigation
        toggleOnClick={() => toggleOnClick}
        isOpen={true}
      />
    )
    const tree = getSnapshot(navigation)
    expect(tree).toMatchSnapshot()
  })

  it(`should render navigation on path from window.location.href /tags`, () => {
    delete global.window.location
    global.window = Object.create(window)
    global.window.location = {
      pathname: `/tags`
    }

    const navigation = (
      <Navigation
        toggleOnClick={() => toggleOnClick}
        isOpen={true}
      />
    )
    const tree = getSnapshot(navigation)
    expect(tree).toMatchSnapshot()
  })

  it(`should render navigation on path /about`, () => {
    const navigation = (
      <Navigation
        toggleOnClick={() => toggleOnClick}
        isOpen={true}
        path="/about"
      />
    )
    const tree = getSnapshot(navigation)
    expect(tree).toMatchSnapshot()
  })
})
