import React from "react"
import Layout from "../layout"
import { getSnapshot } from "./_helpers"

describe(`Layout`, () => {
  it(`should render page`, () => {
    const component = <Layout>Hello World.</Layout>
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render reading pane`, () => {
    const component = (
      <Layout reading={true}>Hello world in a reading page.</Layout>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render the footer`, () => {
    const component = (
      <Layout footer={false}>Hello world without a footer.</Layout>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render custom class`, () => {
    const component = (
      <Layout className="the-answer-to-the-life-the-universe-and-everything">
        Hello world in a custom class.
      </Layout>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
