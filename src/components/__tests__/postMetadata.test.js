import React from 'react'
import PostMetadata from '../postMetadata'
import { getSnapshot } from './_helpers'

describe(`Post metadata`, () => {
  it(`should render`, () => {
    const component = (
      <PostMetadata
        date="2019-02-01T00:00:00.000Z"
        author="Clarice Bouwer"
        ttr={42}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render without an author`, () => {
    const component = (
      <PostMetadata
        date="2019-02-01T00:00:00.000Z"
        ttr={42}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
