import React from 'react'
import Tags from '../tags'
import { getSnapshot } from './_helpers'

describe(`Tags`, () => {
  it(`should accept missing tags`, () => {
    const tags = (
      <Tags />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })

  it(`should render from list`, () => {
    const tags = (
      <Tags
        tags={[`hello`, `world`]}
      />
    )
    const tree = getSnapshot(tags)
    expect(tree).toMatchSnapshot()
  })
})
