import React from "react"
import CreditsPage from "../pages/credits"
import { getSnapshot } from "./_helpers"

describe(`Credits page`, () => {
  it(`should render`, () => {
    const component = <CreditsPage />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
