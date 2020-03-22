import React from 'react'
import Search from '../search'
import { getSnapshot, mockFn } from './_helpers'

describe(`Search`, () => {
  const toggleOnClick = mockFn()

  it(`should render default`, () => {
    const search = (
      <Search
        toggleOnClick={toggleOnClick}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })

  it(`should render open`, () => {
    const search = (
      <Search
        toggleOnClick={toggleOnClick}
        isOpen={true}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const search = (
      <Search
        toggleOnClick={toggleOnClick}
        isOpen={false}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })
})
