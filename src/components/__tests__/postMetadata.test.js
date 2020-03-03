import React from 'react'
import PostMetadata from '../postMetadata'
import { getSnapshot } from './_helpers'

describe(`Post metadata`, () => {
  it(`should render`, () => {
    const postMetadata = (
      <PostMetadata />
    )
    const tree = getSnapshot(postMetadata)
    expect(tree).toMatchSnapshot()
  })
})
