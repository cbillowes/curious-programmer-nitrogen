import React from 'react'
import Layout from '../layout'
import { getSnapshot } from './_helpers'

describe(`Layout`, () => {
  it(`should render page`, () => {
    const layout = (
      <Layout>
        Hello World.
      </Layout>
    )
    const tree = getSnapshot(layout)
    expect(tree).toMatchSnapshot()
  })

  it(`should render reading pane`, () => {
    const layout = (
      <Layout
        reading={true}
      >
        Hello world in a reading page.
      </Layout>
    )
    const tree = getSnapshot(layout)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render the footer`, () => {
    const layout = (
      <Layout
        footer="hidden"
      >
        Hello world without a footer.
      </Layout>
    )
    const tree = getSnapshot(layout)
    expect(tree).toMatchSnapshot()
  })

  it(`should render custom class`, () => {
    const layout = (
      <Layout
        className="the-answer-to-the-life-the-universe-and-everything"
      >
        Hello world in a custom class.
      </Layout>
    )
    const tree = getSnapshot(layout)
    expect(tree).toMatchSnapshot()
  })
})
