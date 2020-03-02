import React from 'react'
import Menu from '../menu'
import { getSnapshot } from './_helpers'

describe(`Menu`, () => {
  it(`should render`, () => {
    const menu = (
      <Menu />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })
})
