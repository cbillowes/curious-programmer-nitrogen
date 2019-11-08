import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Constants from "./const"
import Navigation from "../navigation"
import Data from "../../../gatsby-data"

const Nav = Data.navigation[0]

Enzyme.configure({ adapter: new Adapter() })

describe("Navigation", () => {
  it('should open the navigation bar', () => {
    const wrapper = shallow(<Navigation open={true} />)
    const rendered = wrapper.html()
    const expected = `<nav class="open `
    expect(rendered.indexOf(expected)).toBeGreaterThan(-1)
  })

  it('should close the navigation bar', () => {
    const wrapper = shallow(<Navigation open={false} />)
    const rendered = wrapper.html()
    const expected = `<nav class="closed `
    expect(rendered.indexOf(expected)).toBeGreaterThan(-1)
  })

  it("should render root pathname with first item in Navigation data", () => {
    const rendered = shallow(<Navigation open={true} path="/" />)
    const state = rendered.state()
    const expected = { open: true, path: Nav.to }
    expect(state).toStrictEqual(expected)
  })

  it("should render an active item", () => {
    const wrapper = shallow(<Navigation path="/" />)
    const rendered = wrapper.html()
    const expected = `<span class="${Constants.SELECTED_MENU_ITEM_CLASS}"><a href="/blog">Blog</a></span>`
    expect(rendered.indexOf(expected)).toBeGreaterThan(-1)
  })
})
