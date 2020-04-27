import React from "react"
import ArchivesPage from "../pages/archives"
import { getSnapshot, getListOfPostEdges } from "./_helpers"

describe(`Archives page`, () => {
  it(`should render`, () => {
    const edges = getListOfPostEdges()
    const component = <ArchivesPage edges={edges} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
