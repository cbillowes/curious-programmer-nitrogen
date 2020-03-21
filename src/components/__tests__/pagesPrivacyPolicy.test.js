import React from 'react'
import PrivacyPolicyPage from '../pages/privacy-policy'
import { getSnapshot } from './_helpers'

describe(`Privacy policy page`, () => {
  it(`should render`, () => {
    const aboutPage = (
      <PrivacyPolicyPage />
    )
    const tree = getSnapshot(aboutPage)
    expect(tree).toMatchSnapshot()
  })
})
