import React from 'react'
import License from '../license'
import { getSnapshot } from './_helpers'

describe(`License`, () => {
  it(`should render`, () => {
    const component = (
      <License />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
