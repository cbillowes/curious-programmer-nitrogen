import React from 'react'
import Header from '../header'
import { getMountedComponent, getSnapshot } from './_helpers'

describe(`Header`, () => {
  it(`should render`, () => {
    const component = (
      <Header />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  describe(`should be able to click on the`, () => {
    let header

    beforeEach(() => {
      const component = (
        <Header />
      )
      header = getMountedComponent(component)
    })

    it(`menu button`, () => {
      expect(header.find(`.menu-button`).simulate(`click`))
    })
  })

  describe(`should hide`, () => {
    let header

    beforeEach(() => {
      const component = (
        <Header
          isMenuOpen={false}
        />
      )
      header = getMountedComponent(component)
    })

    it(`navigation`, () => {
      expect(header.find(`.menu-button`).hasClass(`active`)).toBe(false)
      expect(header.find(`.navigation`).hasClass(`closed`)).toBe(true)
    })
  })

  describe(`should show`, () => {
    let header
    beforeEach(() => {
      const component = (
        <Header
          isMenuOpen={true}
        />
      )
      header = getMountedComponent(component)
    })

    it(`navigation`, () => {
      expect(header.find(`.navigation`).hasClass(`open`)).toBe(true)
    })

  })
})
