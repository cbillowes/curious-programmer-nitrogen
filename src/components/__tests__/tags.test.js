import React from 'react'
import Tags from '../tags'
import { getSnapshot } from './_helpers'

describe(`Tags`, () => {
  it(`should not render when there are no tags to render`, () => {
    const tags = (
      <Tags />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })

  it(`should render from a comma separated string`, () => {
    const tags = (
      <Tags
        tags="hello,world"
      />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })

  it(`should render from an array`, () => {
    const tags = (
      <Tags
        tags={["hello", "world"]}
      />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })
})
