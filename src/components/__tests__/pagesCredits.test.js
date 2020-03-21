import React from 'react'
import CreditsPage from '../pages/credits'
import { getSnapshot } from './_helpers'

describe(`Credits page`, () => {
  it(`should render`, () => {
    const aboutPage = (
      <CreditsPage />
    )
    const tree = getSnapshot(aboutPage)
    expect(tree).toMatchSnapshot()
  })
})
