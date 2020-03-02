import React from 'react'
import License from '../license'
import { getSnapshot } from './_helpers'

describe(`License`, () => {
  it(`should render`, () => {
    const license = (
      <License />
    )
    const tree = getSnapshot(license)
    expect(tree).toMatchSnapshot()
  })
})
