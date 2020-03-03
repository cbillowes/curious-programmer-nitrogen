import React from 'react'
import ShowMore from '../showMore'
import { getSnapshot } from './_helpers'

describe(`Show more items`, () => {
  it(`should render`, () => {
    const showMore = (
      <ShowMore
        to="/archives"
      />
    )
    const tree = getSnapshot(showMore)
    expect(tree).toMatchSnapshot()
  })
})
