import React from 'react'
import Loader from '../loader'
import { getSnapshot } from './_helpers'

describe(`Loader`, () => {
  it(`should render`, () => {
    const component = (
      <Loader />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
