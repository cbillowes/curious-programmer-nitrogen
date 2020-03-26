import React from 'react'
import AboutPage from '../pages/about'
import { getSnapshot } from './_helpers'

describe(`About page`, () => {
  it(`should render`, () => {
    const profileImage = {}
    const component = (
      <AboutPage
        profileImage={profileImage}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
