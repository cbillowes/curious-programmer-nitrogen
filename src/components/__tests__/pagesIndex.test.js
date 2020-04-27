import React from "react"
import IndexPage from "../pages/index"
import { getSnapshot, getListOfPostEdges } from "./_helpers"

describe(`Blog page`, () => {
  it(`should render`, () => {
    const edges = getListOfPostEdges()
    const component = <IndexPage edges={edges} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
