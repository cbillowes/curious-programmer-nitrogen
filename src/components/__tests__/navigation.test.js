import React from 'react'
import Navigation from '../navigation'
import { getSnapshot } from './_helpers'

describe(`Navigation`, () => {
  it(`should render`, () => {
    const navigation = (
      <Navigation />
    )
    const tree = getSnapshot(navigation)
    expect(tree).toMatchSnapshot()
  })
})
