import React from 'react'
import Credit from '../credit'
import { getSnapshot } from './_helpers'

describe(`Credit`, () => {
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
})