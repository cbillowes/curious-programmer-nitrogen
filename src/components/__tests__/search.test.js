import React from 'react'
import Search from '../search'
import { getSnapshot } from './_helpers'

describe(`Search`, () => {
  it(`should render`, () => {
    const search = (
      <Search />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })
})
