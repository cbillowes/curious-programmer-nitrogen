import React from 'react'
import PostNavigationTiny from '../postNavigationTiny'
import { getSnapshot } from './_helpers'

describe(`Post navigation tiny`, () => {
  it(`should always render both posts`, () => {
    const previous = {
      slug: `/previous`,
      title: `Don't panic.`,
    }
    const next = {
      slug: `/next`,
      title: `Come to the dark side of the force.`,
    }
    const tiny = (
      <PostNavigationTiny
        previous={previous}
        next={next}
      />
    )
    const tree = getSnapshot(tiny)
    expect(tree).toMatchSnapshot()
  })
})
