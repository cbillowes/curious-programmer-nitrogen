import React from 'react'
import Number from '../number'
import { getSnapshot } from './_helpers'

describe(`Navigation`, () => {
  it(`should render empty when there is no number`, () => {
    const number = (
      <Number />
    )
    const tree = getSnapshot(number)
    expect(tree).toMatchSnapshot()
  })

  it(`should render`, () => {
    const number = (
      <Number
        number={42}
      />
    )
    const tree = getSnapshot(number)
    expect(tree).toMatchSnapshot()
  })
})
