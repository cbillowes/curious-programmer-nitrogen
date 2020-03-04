import React from 'react'
import Menu from '../menu'
import { getSnapshot } from './_helpers'

describe(`Menu`, () => {
  it(`should render`, () => {
    const menu = (
      <Menu
        toggleOnClick={jest.fn()}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })

  it(`should render opened`, () => {
    const menu = (
      <Menu
        toggleOnClick={jest.fn()}
        isOpen={true}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const menu = (
      <Menu
        toggleOnClick={jest.fn()}
        isOpen={false}
      />
    )
    const tree = getSnapshot(menu)
    expect(tree).toMatchSnapshot()
  })
})
