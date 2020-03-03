import React from 'react'
import PostPreview from '../postPreview'
import { getSnapshot } from './_helpers'

describe(`Post preview`, () => {
  it(`should render when all required props are provided`, () => {
    const preview = (
      <PostPreview
        title="Don't panic."
        slug="/dont-panic"
      >
        <p>Earthman Arthur Dent is rescued by his friend, Ford Prefect—an
          alien researcher for the titular Hitchhiker's Guide to the
          Galaxy, an enormous work providing information about every
          planet in the universe—from the Earth just before it is
          destroyed by the alien Vogons.
        </p>
      </PostPreview>
    )
    const tree = getSnapshot(preview)
    expect(tree).toMatchSnapshot()
  })

  it(`should limit the blurb word count`, () => {
    const preview = (
      <PostPreview
        title="Don't panic."
        slug="/dont-panic"
        limit={5}
      >
        <p>Earthman Arthur Dent is rescued by his friend, Ford Prefect—an
          alien researcher for the titular Hitchhiker's Guide to the
          Galaxy, an enormous work providing information about every
          planet in the universe—from the Earth just before it is
          destroyed by the alien Vogons.
        </p>
      </PostPreview>
    )
    const tree = getSnapshot(preview)
    expect(tree).toMatchSnapshot()
  })
})
