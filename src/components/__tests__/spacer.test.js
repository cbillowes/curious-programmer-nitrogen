import React from 'react'
import Spacer from '../spacer'
import { getSnapshot } from './_helpers'

describe.skip(`Spacer`, () => {
  it(`should render`, () => {
    const spacer = (
      <Spacer />
    )
    const tree = getSnapshot(spacer)
    expect(tree).toMatchSnapshot()
  })
})
