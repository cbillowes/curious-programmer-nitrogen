import React from "react"
import Thumbnail from "../thumbnail"
import { getSnapshot } from "./_helpers"

describe(`Thumbnail`, () => {
  it(`should render with no photo`, () => {
    const component = (
      <Thumbnail
        number={42}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with a specific image`, () => {
    const component = (
      <Thumbnail
        number={42}
        photo="dolphin.jpg"
        credit="Douglas Adams"
        creditLink="https://www.douglas.adams"
        creditSource="personal"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render without attribution`, () => {
    const component = (
      <Thumbnail
        number={42}
        photo="dolphin.jpg"
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
