import React from 'react'
import Navigation from '../navigation'
import { getSnapshot, mockFn } from './_helpers'

describe(`Navigation`, () => {
  const toggleOnClick = mockFn()

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
})
