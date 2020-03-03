import React from 'react'
import Blurb from '../blurb'
import { getSnapshot } from './_helpers'

describe(`Blurb`, () => {
  describe(`should extract content`, () => {
    it(`from plain text`, () => {
      const text = (
        <Blurb>
          The ships hung in the sky in much the same way
          that bricks don't.
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })

    it(`from html elements`, () => {
      const text = (
        <Blurb>
          <h1>Don't panic!</h1>
          <p>Time is an illusion.</p>
          <p>
            Would it save you a lot of time if
            <strong>I just gave up and went mad now?</strong>
          </p>
          <span>
            The ships hung in the sky in much the same way
            that bricks don't.
          </span>
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })
  })

  describe(`should limit words`, () => {
    it(`extracted from plain text`, () => {
      const text = (
        <Blurb
          limit={6}
        >
          The ships hung in the sky in much the same way
          that bricks don't.
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })

    it(`extracted from html elements`, () => {
      const text = (
        <Blurb
          limit={6}
        >
          <h1>Don't panic!</h1>
          <p>Time is an illusion.</p>
          <p>
            Would it save you a lot of time if
            <strong>I just gave up and went mad now?</strong>
          </p>
          <span>
            The ships hung in the sky in much the same way
            that bricks don't.
          </span>
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })
  })

  describe(`should forceably limit words`, () => {
    it(`extracted from plain text`, () => {
      const text = (
        <Blurb>
          {Array(300).fill().map((_, i) => ++i).map(i => { return i.toString() })}
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })

    it(`extracted from html elements`, () => {
      const text = (
        <Blurb>
          {Array(300).fill().map((_, i) => ++i).map(i => { return <p key={i}>{i.toString()}</p> })}
        </Blurb>
      )
      const tree = getSnapshot(text)
      expect(tree).toMatchSnapshot()
    })
  })
})