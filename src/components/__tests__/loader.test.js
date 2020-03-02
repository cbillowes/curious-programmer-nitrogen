import React from 'react'
import Loader from '../loader'
import { getSnapshot } from './_helpers'

describe(`Loader`, () => {
  it(`should render`, () => {
    const loader = (
      <Loader />
    )
    const tree = getSnapshot(loader)
    expect(tree).toMatchSnapshot()
  })
})
