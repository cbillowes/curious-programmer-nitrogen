import React from 'react'
import LicensePage from '../pages/license'
import { getSnapshot } from './_helpers'

describe(`Credits page`, () => {
  it(`should render`, () => {
    const component = (
      <LicensePage />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
