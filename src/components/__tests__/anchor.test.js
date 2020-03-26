import React from 'react'
import Anchor from '../anchor'
import { getSnapshot } from './_helpers'

describe(`Anchor`, () => {
  it(`should link to http/https`, () => {
    const component = (
      <Anchor
        to="https://curiousprogrammer.dev"
      >
        Curious Programmer
      </Anchor>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`link to mailto`, () => {
    const component = (
      <Anchor
        to="mailto:clarice@bouwer.dev"
      >
        clarice@bouwer.dev
      </Anchor>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`link internally`, () => {
    const component = (
      <Anchor
        to="/about"
      >
        About
      </Anchor>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should configure class name internally`, () => {
    const component = (
      <Anchor
        to="/about"
        className="some-or-other-class"
      >
        About
      </Anchor>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should configure class name externally`, () => {
    const component = (
      <Anchor
        to="https://curiousprogrammer.dev"
        className="some-or-other-class"
      >
        Curious Programmer
      </Anchor>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should configure an empty anchor`, () => {
    const component = (
      <Anchor
        to="https://curiousprogrammer.dev"
        className="blog"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
