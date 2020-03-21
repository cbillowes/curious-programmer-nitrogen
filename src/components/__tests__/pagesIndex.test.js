import React from 'react'
import IndexPage from '../pages/index'
import { getSnapshot, getListOfPostEdges } from './_helpers'

describe(`Blog page`, () => {
  it(`should render`, () => {
    const edges = getListOfPostEdges()
    const indexPage = (
      <IndexPage
        edges={edges}
      />
    )
    const tree = getSnapshot(indexPage)
    expect(tree).toMatchSnapshot()
  })
})
