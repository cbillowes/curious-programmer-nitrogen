import React from 'react'
import { Spacer, LargeSpacer, SmallSpacer } from '../spacer'
import { getSnapshot } from './_helpers'

describe(`Spacer`, () => {

  it(`should render default`, () => {
    const spacer = (
      <Spacer />
    )
    const tree = getSnapshot(spacer)
    expect(tree).toMatchSnapshot()
  })

  it(`should render large`, () => {
    const spacer = (
      <LargeSpacer />
    )
    const tree = getSnapshot(spacer)
    expect(tree).toMatchSnapshot()
  })

  it(`should render small`, () => {
    const spacer = (
      <SmallSpacer />
    )
    const tree = getSnapshot(spacer)
    expect(tree).toMatchSnapshot()
  })
})

//TODO: do I need all these spacers?