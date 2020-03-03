import React from 'react'
import Anchor from '../anchor'
import { validateValues, getSnapshot } from './_helpers'

describe(`Anchor`, () => {
  it(`should link to http/https`, () => {
    const tree = getSnapshot(
      <Anchor
        to="https://curiousprogrammer.dev"
      >
        Curious Programmer
      </Anchor>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`link to mailto`, () => {
    const tree = getSnapshot(
      <Anchor
        to="mailto:clarice@bouwer.dev"
      >
        clarice@bouwer.dev
      </Anchor>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`link internally`, () => {
    const tree = getSnapshot(
      <Anchor
        to="/about"
      >
        About
      </Anchor>
    )
    expect(tree).toMatchSnapshot()
  })
})
