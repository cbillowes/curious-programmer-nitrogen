import React from 'react'
import SearchBar from '../searchBar'
import { getSnapshot, mockFn } from './_helpers'

describe(`Search bar`, () => {
  it(`should render`, () => {
    const bar = (
      <SearchBar
        toggleOnClick={mockFn()}
      />
    )
    const tree = getSnapshot(bar)
    expect(tree).toMatchSnapshot()
  })
})
