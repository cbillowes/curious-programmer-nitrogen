import React from 'react'
import Credit from '../credit'
import { getSnapshot, getElement, mustNotContainValue, validateValues } from './_helpers'

describe(`Credit`, () => {
  it(`should be empty`, () => {
    const tree = getSnapshot(
      <Credit />
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should only render its body`, () => {
    const tree = getSnapshot(
      <Credit>
        <p>Only this will be rendered.</p>
      </Credit>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should use the title for its empty body`, () => {
    const tree = getSnapshot(
      <Credit
        title="Use me instead.">
      </Credit>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should render an external credit`, () => {
    const tree = getSnapshot(
      <Credit
        to="https://curiousprogrammer.dev"
        title="Curious Programmer"
      >
        Curious Programmer
      </Credit>
    )
    expect(tree).toMatchSnapshot()
  })

  it(`should render an internal credit`, () => {
    const tree = getSnapshot(
      <Credit
        to="/blog"
        title="Curious Programmer"
      >
        Curious Programmer
      </Credit>
    )
    expect(tree).toMatchSnapshot()
  })

  describe(`should not`, () => {
    it(`generate an anchor when a link is not provided`, () => {
      const credit = (
        <Credit
          title="hello world."
        >
        </Credit>
      )
      const match = mustNotContainValue(credit, `href="`)
      expect(match).toBe(true)
    })

    it(`link out of the website for internal links`, () => {
      const credit = (
        <Credit
          title="internal"
          to="/blog"
        >
          Internal link
        </Credit>
      )
      const matches = validateValues(credit,
        [
          { contains: false, value: `nofollow noopener noreferrer"` },
          { contains: false, value: `target="_blank"` }
        ])
      expect(matches).toBe(true)
    })

    it(`stay within the website for external links`, () => {
      const credit = (
        <Credit
          title="external"
          to="https://external.link"
        >
          External link
        </Credit>
      )
      const matches = validateValues(credit,
        [
          { contains: true, value: `nofollow noopener noreferrer"` },
          { contains: true, value: `target="_blank"` }
        ])
      expect(matches).toBe(true)
    })
  })
})