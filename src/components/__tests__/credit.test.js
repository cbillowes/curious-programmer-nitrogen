import React from 'react'
import Credit from '../credit'
import { getSnapshot } from './_helpers'

describe(`Credit`, () => {
  it(`should render an external credit`, () => {
    const component = (
      <Credit
        to="https://curiousprogrammer.dev"
        title="Curious Programmer"
      >
        Curious Programmer
      </Credit>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render an internal credit`, () => {
    const component = (
      <Credit
        to="/blog"
        title="Curious Programmer"
      >
        Curious Programmer
      </Credit>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
