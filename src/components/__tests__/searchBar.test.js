import React from 'react'
import SearchBar from '../searchBar'
import { getSnapshot } from './_helpers'

describe(`Search bar`, () => {
  it(`should render`, () => {
    const bar = (
      <SearchBar />
    )
    const tree = getSnapshot(bar)
    expect(tree).toMatchSnapshot()
  })
})
