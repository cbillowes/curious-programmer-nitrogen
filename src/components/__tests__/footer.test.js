import React from 'react'
import { getSnapshot } from './_helpers'
import Footer from '../footer'

describe(`Footer`, () => {
  it(`should render`, () => {
    const tree = getSnapshot(
      <Footer />
    )
    expect(tree).toMatchSnapshot()
  })
})