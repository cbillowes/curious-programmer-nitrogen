import React from 'react'
import PageNotFound from '../pages/404'
import { getSnapshot, getListOfPostEdges } from './_helpers'

describe(`404 page`, () => {
  it(`should render`, () => {
    const edges = getListOfPostEdges()
    const component = (
      <PageNotFound
        edges={edges}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
