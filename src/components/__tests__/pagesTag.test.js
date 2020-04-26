import React from 'react'
import TagPage from '../pages/tag'
import { getSnapshot, getListOfPostEdges } from './_helpers'

describe(`Tag page`, () => {
  it(`should render without posts`, () => {
    const edges = []
    const component = (
      <TagPage tag="Technical" edges={edges} />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with posts`, () => {
    const edges = getListOfPostEdges()
    const component = (
      <TagPage tag="Tutorial" edges={edges} />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
