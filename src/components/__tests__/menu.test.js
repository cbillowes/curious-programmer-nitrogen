import React from 'react'
import Menu from '../menu'
import { getSnapshot, mockFn } from './_helpers'

describe(`Menu`, () => {
  it(`should render`, () => {
    const menu = (
      <Menu
        toggleOnClick={mockFn()}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })

  it(`should render opened`, () => {
    const menu = (
      <Menu
        toggleOnClick={mockFn()}
        isOpen={true}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const menu = (
      <Menu
        toggleOnClick={mockFn()}
        isOpen={false}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })
})
