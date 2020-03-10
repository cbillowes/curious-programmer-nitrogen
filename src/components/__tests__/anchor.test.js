import React from 'react'
import Anchor from '../anchor'
import { getSnapshot } from './_helpers'

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

  it(`should configure class name internally`, () => {
    const tree = getSnapshot(
      <Anchor
        to="/about"
        className="some-or-other-class"
      >
        About
      </Anchor>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should configure class name externally`, () => {
    const tree = getSnapshot(
      <Anchor
        to="https://curiousprogrammer.dev"
        className="some-or-other-class"
      >
        Curious Programmer
      </Anchor>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should configure an empty anchor`, () => {
    const tree = getSnapshot(
      <Anchor
        to="https://curiousprogrammer.dev"
        className="blog"
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
