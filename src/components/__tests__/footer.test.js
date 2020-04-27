import React from "react"
import { getSnapshot } from "./_helpers"
import Footer from "../footer"

describe(`Footer`, () => {
  it(`should render`, () => {
    const component = <Footer />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
