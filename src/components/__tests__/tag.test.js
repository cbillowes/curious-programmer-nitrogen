import React from 'react'
import Tag from '../tag'
import { getSnapshot } from './_helpers'

describe(`Tag`, () => {
  it(`should render`, () => {
    const tag = (
      <Tag />
    )
    const tree = getSnapshot(tag)
    expect(tree).toMatchSnapshot()
  })
})
