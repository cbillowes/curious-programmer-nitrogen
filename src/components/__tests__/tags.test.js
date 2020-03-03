import React from 'react'
import Tags from '../tags'
import { getSnapshot } from './_helpers'

describe(`Tags`, () => {
  it(`should render`, () => {
    const tags = (
      <Tags />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })
})
