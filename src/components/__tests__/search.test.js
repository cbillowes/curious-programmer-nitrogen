import React from 'react'
import Search from '../search'
import { getSnapshot } from './_helpers'

describe(`Search`, () => {
  it(`should render default`, () => {
    const search = (
      <Search
        toggleOnClick={jest.fn()}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })

  it(`should render open`, () => {
    const search = (
      <Search
        toggleOnClick={jest.fn()}
        isOpen={true}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })

  it(`should render closed`, () => {
    const search = (
      <Search
        toggleOnClick={jest.fn()}
        isOpen={false}
      />
    )
    const tree = getSnapshot(search)
    expect(tree).toMatchSnapshot()
  })
})
