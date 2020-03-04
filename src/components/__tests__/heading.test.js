import React from 'react'
import { getSnapshot } from "./_helpers"
import { H1, H2, H3, H4 } from "../heading"

describe(`Heading`, () => {
  it(`should render`, () => {
    const headings = (
      <div>
        <H1>Don't panic.</H1>
        <H2>Time is an illusion. Lunchtime doubly so.</H2>
        <H3>So long and thanks for all the fish.</H3>
        <H4>The ships hung in the sky in much the same way that bricks don't.</H4>
      </div>
    )
    const tree = getSnapshot(headings)
    expect(tree).toMatchSnapshot()
  })

  it(`should capture class names`, () => {
    const headings = (
      <div>
        <H1 className="un">un</H1>
        <H2 className="deux">deux</H2>
        <H3 className="trois">trois</H3>
        <H4 className="quatre">quatre</H4>
      </div>
    )
    const tree = getSnapshot(headings)
    expect(tree).toMatchSnapshot()
  })
})
