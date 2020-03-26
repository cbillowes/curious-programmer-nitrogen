import React from 'react'
import PrivacyPolicyPage from '../pages/privacy-policy'
import { getSnapshot } from './_helpers'

describe(`Privacy policy page`, () => {
  it(`should render`, () => {
    const component = (
      <PrivacyPolicyPage />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
