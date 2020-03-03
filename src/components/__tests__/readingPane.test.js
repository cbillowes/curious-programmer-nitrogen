import React from 'react'
import ReadingPane from '../readingPane'
import { getSnapshot } from './_helpers'

describe(`Reading pane`, () => {
  it(`should render`, () => {
    const pane = (
      <ReadingPane />
    )
    const tree = getSnapshot(pane)
    expect(tree).toMatchSnapshot()
  })
})
