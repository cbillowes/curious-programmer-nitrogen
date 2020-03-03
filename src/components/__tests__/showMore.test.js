import React from 'react'
import Navigation from '../showMore'
import { getSnapshot } from './_helpers'

describe(`Show more items`, () => {
  it(`should render`, () => {
    const showMore = (
      <Navigation />
    )
    const tree = getSnapshot(showMore)
    expect(tree).toMatchSnapshot()
  })
})
