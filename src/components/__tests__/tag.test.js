import React from 'react'
import Tag from '../tag'
import { getSnapshot } from './_helpers'

describe(`Tag`, () => {
  it(`should render readonly`, () => {
    const component = (
      <Tag
        title="Technical"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render internal`, () => {
    const component = (
      <Tag
        title="Technical"
        to="/tag/technical"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render external`, () => {
    const component = (
      <Tag
        title="Curious Programmer"
        to="https://curiousprogrammer.dev"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
