import React from "react"
import ShowMore from "../showMore"
import { getSnapshot } from "./_helpers"

describe(`Show more items`, () => {
  it(`should render`, () => {
    const component = <ShowMore to="/archives" />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
