import React from 'react'
import PostNavigationTeaser from '../postNavigationTeaser'
import { getSnapshot } from './_helpers'

describe(`Post navigation teaser`, () => {
  it(`should render`, () => {
    const teaser = (
      <PostNavigationTeaser />
    )
    const tree = getSnapshot(teaser)
    expect(tree).toMatchSnapshot()
  })
})
