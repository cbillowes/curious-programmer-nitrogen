import React from 'react'
import PostNavigationTiny from '../postNavigationTiny'
import { getSnapshot } from './_helpers'

describe(`Post navigation tiny`, () => {
  it(`should render`, () => {
    const tiny = (
      <PostNavigationTiny />
    )
    const tree = getSnapshot(tiny)
    expect(tree).toMatchSnapshot()
  })
})
