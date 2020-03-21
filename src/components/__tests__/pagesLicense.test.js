import React from 'react'
import LicensePage from '../pages/license'
import { getSnapshot } from './_helpers'

describe(`Credits page`, () => {
  it(`should render`, () => {
    const aboutPage = (
      <LicensePage />
    )
    const tree = getSnapshot(aboutPage)
    expect(tree).toMatchSnapshot()
  })
})
