import React from 'react'
import TagsPage from '../pages/tags'
import { getSnapshot } from './_helpers'

describe(`Tags page`, () => {
  it(`should render`, () => {
    const edges = []
    const tagsPage = (
      <TagsPage edges={edges} />
    )
    const tree = getSnapshot(tagsPage)
    expect(tree).toMatchSnapshot()
  })
})
