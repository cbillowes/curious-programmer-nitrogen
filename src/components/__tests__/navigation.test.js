import React from "react"
import Navigation from "../navigation"
import { getSnapshot, mockFn } from "./_helpers"

describe(`Navigation`, () => {
  const toggleOnClick = mockFn()

  it(`should render default navigation`, () => {
    const component = <Navigation toggleOnClick={() => toggleOnClick} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render open navigation`, () => {
    const component = (
      <Navigation toggleOnClick={() => toggleOnClick} isOpen={true} />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
