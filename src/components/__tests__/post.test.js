import React from 'react'
import Post from '../post'
import { getSnapshot } from './_helpers'

describe(`Post`, () => {
  it(`should render`, () => {
    const post = (
      <Post />
    )
    const tree = getSnapshot(post)
    expect(tree).toMatchSnapshot()
  })
})
