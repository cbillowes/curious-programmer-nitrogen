import React from 'react'
import Search from '../search'
import { getSnapshot, mockFn } from './_helpers'

describe(`Search`, () => {
  const toggleOnClick = mockFn()

  it(`should render default`, () => {
    const component = (
      <Search
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render open`, () => {
    const component = (
      <Search
        toggleOnClick={toggleOnClick}
        isOpen={true}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const component = (
      <Search
        toggleOnClick={toggleOnClick}
        isOpen={false}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
