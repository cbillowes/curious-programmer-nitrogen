import React from 'react'
import MenuItem from '../menuItem'
import { getSnapshot } from './_helpers'

const toggleOnClick = function (e) { }

describe(`Menu item`, () => {
  it(`should be active`, () => {
    const menuItem = (
      <MenuItem
        item={{ to: `/blog`, name: `Blog` }}
        active={true}
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItem)
    expect(tree).toMatchSnapshot()
  })

  it(`should be inactive`, () => {
    const menuItem = (
      <MenuItem
        item={{ to: `/blog`, name: `Blog` }}
        active={false}
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(menuItem)
    expect(tree).toMatchSnapshot()
  })
})
