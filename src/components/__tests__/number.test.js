import React from 'react'
import Number from '../number'
import { getSnapshot } from './_helpers'

describe(`Navigation`, () => {
  it(`should render empty when there is no number`, () => {
    const component = (
      <Number />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render`, () => {
    const component = (
      <Number
        number={42}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
