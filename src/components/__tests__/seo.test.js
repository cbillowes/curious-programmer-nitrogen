import React from 'react'
import SEO from '../seo'
import { getSnapshot } from './_helpers'

describe.skip(`SEO`, () => {
  it(`should render`, () => {
    const seo = (
      <SEO />
    )
    const tree = getSnapshot(seo)
    expect(tree).toMatchSnapshot()
  })
})
