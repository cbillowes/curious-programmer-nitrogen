import React from 'react'
import MenuItems from '../menuItems'
import { getSnapshot } from './_helpers'

describe(`Menu items`, () => {
  it(`should render`, () => {
    const menuItems = (
      <MenuItems />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })
})
