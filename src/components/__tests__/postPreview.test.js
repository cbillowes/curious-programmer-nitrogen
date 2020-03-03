import React from 'react'
import PostPreview from '../postPreview'
import { getSnapshot } from './_helpers'

describe.skip(`Post preview`, () => {
  it(`should render`, () => {
    const preview = (
      <PostPreview />
    )
    const tree = getSnapshot(preview)
    expect(tree).toMatchSnapshot()
  })
})
