import React from 'react'
import { WithoutHeadingSpacer, LargeSpacer, WithHeadingSpacer } from '../spacer'
import { getSnapshot } from './_helpers'

describe(`Spacer`, () => {

  it(`should render default`, () => {
    const spacer = (
      <WithoutHeadingSpacer />
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
      <WithHeadingSpacer />
    )
    const tree = getSnapshot(spacer)
    expect(tree).toMatchSnapshot()
  })
})

//TODO: do I need all these spacers?
