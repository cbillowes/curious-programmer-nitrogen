import React from "react"
import Logo from "../logo"
import { getSnapshot } from "./_helpers"

describe(`Logo`, () => {
  it(`should render`, () => {
    const component = <Logo />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
