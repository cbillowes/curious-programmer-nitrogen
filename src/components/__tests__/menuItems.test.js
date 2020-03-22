import React from 'react'
import MenuItems from '../menuItems'
import { getSnapshot } from './_helpers'

describe(`Menu items`, () => {
  it(`should not set any page as active when the page does not exist`, () => {
    const menuItems = (
      <MenuItems
        path="/blogging"
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set blog page as active without trailing /`, () => {
    const menuItems = (
      <MenuItems
        path="/blog"
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set blog page as active with trailing /`, () => {
    const menuItems = (
      <MenuItems
        path="/blog/"
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })

  it(`should set blog page as active when post in /blog/ is displayed`, () => {
    const menuItems = (
      <MenuItems
        path="/blog/dont-panic"
      />
    )
    const tree = getSnapshot(menuItems)
    expect(tree).toMatchSnapshot()
  })
})
