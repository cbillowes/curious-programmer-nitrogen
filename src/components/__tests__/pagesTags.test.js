import React from 'react'
import TagsPage from '../pages/tags'
import { getSnapshot } from './_helpers'

describe(`Tags page`, () => {
  it(`should render when there are no tags`, () => {
    const edges = []
    const tagsPage = (
      <TagsPage edges={edges} />
    )
    const tree = getSnapshot(tagsPage)
    expect(tree).toMatchSnapshot()
  })

  it(`should render all tags`, () => {
    const edges = [
      {
        node: {
          frontmatter: {
            tags: ["do", "not", "panic"]
          },
        },
      },
      {
        node: {
          frontmatter: {
            tags: ["do", "not", "panic"]
          },
        },
      },
    ]
    const tagsPage = (
      <TagsPage edges={edges} />
    )
    const tree = getSnapshot(tagsPage)
    expect(tree).toMatchSnapshot()
  })
})
