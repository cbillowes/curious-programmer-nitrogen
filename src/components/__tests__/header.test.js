import React from 'react'
import Header from '../header'
import { getMountedComponent, getSnapshot } from './_helpers'

const search = process.env.GATSBY_SEARCH_FEATURE === "true"
describe(`Header (GATSBY_SEARCH_FEATURE=${process.env.GATSBY_SEARCH_FEATURE})`, () => {
  it(`should render`, () => {
    const tree = getSnapshot(
      <Header />
    )
    expect(tree).toMatchSnapshot()
  })

  describe(`should be able to click on the`, () => {
    let header

    beforeEach(() => {
      header = getMountedComponent(<Header />)
    })

    it(`menu button`, () => {
      expect(header.find(`.menu-button`).simulate(`click`))
    })

    it(`search button`, () => {
      if (search) {
        expect(header.find(`.search-button`).simulate(`click`))
      } else {
        expect(header.find(`.search-button`).length).toBe(0)
      }
    })
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
      if (search) {
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
      if (search) {
        expect(header.find(`.search-button`).hasClass(`active`)).toBe(true)
      } else {
        expect(header.find(`.search-button`).length).toBe(0)
      }
    })
  })
})
