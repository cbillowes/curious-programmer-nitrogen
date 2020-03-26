import React from 'react'
import SearchBar from '../searchBar'
import { getSnapshot, mockFn } from './_helpers'

describe(`Search bar`, () => {
  it(`should render`, () => {
    const component = (
      <SearchBar
        toggleOnClick={mockFn()}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
