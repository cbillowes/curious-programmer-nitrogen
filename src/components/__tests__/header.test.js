import React from 'react'
import Header, { toggleSearchFeature } from '../header'
import { getMountedComponent, getSnapshot } from './_helpers'

describe(`Header`, () => {
  it(`should render`, () => {
    const tree = getSnapshot(
      <Header />
    )
    expect(tree).toMatchSnapshot()
  })

  describe(`should be able to click on the`, () => {
    if (toggleSearchFeature) {
      let header
      beforeEach(() => {
        header = getMountedComponent(<Header />)
      })
      it(`menu button`, () => {
        expect(header.find(`.menu-button`).simulate(`click`))
      })

      it(`search button`, () => {
        expect(header.find(`.search-button`).simulate(`click`))
      })
    } else {
      expect(header.find(`.search-button`).length).toBe(0)
    }
  })

  describe(`should hide`, () => {
    let header
    beforeEach(() => {
      header = getMountedComponent(
        <Header
          isMenuOpen={false}
          isSearchOpen={false}
        />)
    })

    it(`navigation`, () => {
      expect(header.find(`.menu-button`).hasClass(`active`)).toBe(false)
      expect(header.find(`.navigation`).hasClass(`closed`)).toBe(true)
    })

    it(`search`, () => {
      if (toggleSearchFeature) {
        expect(header.find(`.search-button`).hasClass(`active`)).toBe(false)
        expect(header.find(`.search`).hasClass(`closed`)).toBe(true)
      } else {
        expect(header.find(`.search-button`).length).toBe(0)
      }
    })
  })

  describe(`should show`, () => {
    let header
    beforeEach(() => {
      header = getMountedComponent(
        <Header
          isMenuOpen={true}
          isSearchOpen={true}
        />
      )
    })

    it(`navigation`, () => {
      expect(header.find(`.navigation`).hasClass(`open`)).toBe(true)
    })

    it(`search`, () => {
      if (toggleSearchFeature) {
        expect(header.find(`.search-button`).hasClass(`active`)).toBe(true)
      } else {
        expect(header.find(`.search-button`).length).toBe(0)
      }
    })
  })
})