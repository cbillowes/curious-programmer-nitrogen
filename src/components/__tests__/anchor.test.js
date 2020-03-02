import React from 'react'
import Anchor from '../anchor'
import { validateValues, getSnapshot } from './_helpers'

describe(`Anchor`, () => {
  it(`should not have a link`, () => {
    const tree = getSnapshot(
      <Anchor />
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should link to http/https`, () => {
    const tree = getSnapshot(
      <Anchor
        to="https://curiousprogrammer.dev"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it(`link to mailto`, () => {
    const tree = getSnapshot(
      <Anchor
        to="mailto:clarice@bouwer.dev"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it(`link internally`, () => {
    const tree = getSnapshot(
      <Anchor
        to="/about"
      />
    )
    expect(tree).toMatchSnapshot()
  })

  describe(`should configure`, () => {
    it(`http/https link`, () => {
      const anchor = (
        <Anchor
          to="https://curiousprogrammer.dev"
          title="A link to my blog"
        >
          Curious Programmer
        </Anchor>
      )
      const matches = validateValues(anchor,
        [
          { contains: true, value: `href="https://curiousprogrammer.dev"` },
          { contains: true, value: `rel="nofollow noopener noreferrer` },
          { contains: true, value: `title="A link to my blog"` },
          { contains: true, value: "Curious Programmer" },
          { contains: true, value: `target="_blank` },
        ])
      expect(matches).toBeTruthy()
    })

    it(`mailto link`, () => {
      const anchor = (
        <Anchor
          to="mailto:clarice@bouwer.dev"
          title="Get in touch"
        >
          clarice@bouwer.dev
        </Anchor>
      )
      const matches = validateValues(anchor,
        [
          { contains: true, value: `href="mailto:clarice@bouwer.dev"` },
          { contains: true, value: `rel="nofollow noopener noreferrer` },
          { contains: true, value: `title="Get in touch"` },
          { contains: true, value: "clarice@bouwer.dev" },
          { contains: true, value: `target="_blank` }
        ])
      expect(matches).toBeTruthy()
    })

    it(`internal link`, () => {
      const anchor = (
        <Anchor
          to="/blog"
          title="A link to my blog">
          Welcome
        </Anchor>
      )
      const matches = validateValues(anchor,
        [
          { contains: true, value: `href="/blog"` },
          { contains: false, value: `rel="nofollow noopener noreferrer` },
          { contains: true, value: `title="A link to my blog"` },
          { contains: true, value: "Welcome" },
          { contains: false, value: `target="_blank` }
        ])
      expect(matches).toBeTruthy()
    })
  })
})
