import React from 'react'
import Tag from '../tag'
import { getSnapshot } from './_helpers'

describe(`Tag`, () => {
  it(`should render readonly`, () => {
    const tag = (
      <Tag
        title="Technical"
      />
    )
    const tree = getSnapshot(tag)
    expect(tree).toMatchSnapshot()
  })

  it(`should render internal`, () => {
    const tag = (
      <Tag
        title="Technical"
        to="/tag/technical"
      />
    )
    const tree = getSnapshot(tag)
    expect(tree).toMatchSnapshot()
  })

  it(`should render external`, () => {
    const tag = (
      <Tag
        title="Curious Programmer"
        to="https://curiousprogrammer.dev"
      />
    )
    const tree = getSnapshot(tag)
    expect(tree).toMatchSnapshot()
  })
})
