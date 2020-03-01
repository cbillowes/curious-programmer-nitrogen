import React from 'react'
import Header from '../header'
import Logo from '../logo'
import SearchBar from '../searchBar'
import Navigation from '../navigation'
import { containsElement, getMountedComponent } from './_helpers'

function sut(props) {
  return (
    <Header
      isMenuOpen={props.isMenuOpen}
      isSearchOpen={props.isSearchOpen}
    />
  )
}

let header

describe(`Header`, () => {

  describe(`should contain the class name`, () => {

    beforeEach(() => {
      header = getMountedComponent(sut({}))
    })

    it(`for the component`, () => {
      expect(header.find(`.header`).length).toBe(1)
    })

    it(`to align those components on the page`, () => {
      expect(header.find(`.wrapper`).length).toBe(1)
    })

  })

  describe(`should render the`, () => {

    beforeEach(() => {
      header = sut({})
    })

    it(`logo`, () => {
      const match = containsElement(
        header,
        <Logo />
      )
      expect(match).toBeTruthy()
    })

    it(`search bar`, () => {
      const match = containsElement(
        header,
        <SearchBar />
      )
      expect(match).toBeTruthy()
    })

    it(`navigation`, () => {
      const match = containsElement(
        header,
        <Navigation />
      )
      expect(match).toBeTruthy()
    })

  })

  describe(`should hide elements when unactiviated, including the`, () => {

    let component

    beforeEach(() => {
      component = getMountedComponent(sut({
        isMenuOpen: false,
        isSearchOpen:false,
      }))
    })

    it(`navigation`, () => {
      expect(component.find(`.navigation`).hasClass(`closed`)).toBe(true)
    })

    it(`search bar`, () => {
      expect(component.find(`.search-button`).hasClass(`active`)).toBe(false)
    })

  })

  describe(`should show elements when activated, including the`, () => {

    let component

    beforeEach(() => {
      component = getMountedComponent(sut({
        isMenuOpen: true,
        isSearchOpen: true,
      }))
    })

    it(`navigation`, () => {
      expect(component.find(`.navigation`).hasClass(`open`)).toBe(true)
    })

    it(`search bar`, () => {
      expect(component.find(`.search-button`).hasClass(`active`)).toBe(true)
    })

  })

})