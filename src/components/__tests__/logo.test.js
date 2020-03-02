import React from 'react'
import Logo from '../logo'
import { getSnapshot } from './_helpers'

describe(`Logo`, () => {
  it(`should render`, () => {
    const logo = (
      <Logo />
    )
    const tree = getSnapshot(logo)
    expect(tree).toMatchSnapshot()
  })
})
