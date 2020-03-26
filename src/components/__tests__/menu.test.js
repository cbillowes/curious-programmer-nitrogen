import React from 'react'
import Menu from '../menu'
import { getSnapshot, mockFn } from './_helpers'

describe(`Menu`, () => {
  it(`should render`, () => {
    const component = (
      <Menu
        toggleOnClick={mockFn()}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render opened`, () => {
    const component = (
      <Menu
        toggleOnClick={mockFn()}
        isOpen={true}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const component = (
      <Menu
        toggleOnClick={mockFn()}
        isOpen={false}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
