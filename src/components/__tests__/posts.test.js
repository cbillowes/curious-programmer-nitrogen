import React from 'react'
import Posts from '../posts'
import { getSnapshot } from './_helpers'

describe(`Posts`, () => {
  it(`should render`, () => {
    const posts = (
      <Posts />
    )
    const tree = getSnapshot(posts)
    expect(tree).toMatchSnapshot()
  })
})
