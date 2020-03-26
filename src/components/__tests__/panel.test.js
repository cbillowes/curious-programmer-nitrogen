//TODO: component state testing template
import React from 'react'
import Panel from '../panel'
import { getSnapshot, getMount } from './_helpers'

describe(`Panel`, () => {
  it(`should not render collapsed`, () => {
    const component = (
      <Panel title="Want to hire me?">
        <p>
          <strong>I am NOT on the market at the moment.</strong>
          When I am, ask me to do a test at home or invite me to an informal interview over coffee. I am shy but I warm up and shine in time.
          I can handle realistic pressure. Working persistent long hours is not a job for me.
          I prefer remote work in Clojure, React or Gatsby.
          I use Spacemacs (Evil mode) and Visual Studio Code.
          I need a laptop, preferrably a MacBook Pro.
        </p>
      </Panel>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render expanded`, () => {
    const component = (
      <Panel title="Want to hire me?">
        <p>
          <strong>I am NOT on the market at the moment.</strong>
          When I am, ask me to do a test at home or invite me to an informal interview over coffee. I am shy but I warm up and shine in time.
          I can handle realistic pressure. Working persistent long hours is not a job for me.
          I prefer remote work in Clojure, React or Gatsby.
          I use Spacemacs (Evil mode) and Visual Studio Code.
          I need a laptop, preferably a MacBook Pro.
      </p>
      </Panel>
    )
    const mounted = getMount(component)
    mounted.find(`.title`).simulate(`click`)

    const tree = getSnapshot(mounted.find(`.panel`))
    expect(tree).toMatchSnapshot()
  })

  it(`should be able to toggle`, () => {
    const component = (
      <Panel title="Want to hire me?">
        <p>
          <strong>I am NOT on the market at the moment.</strong>
        </p>
      </Panel>
    )
    const mounted = getMount(component)
    expect(mounted.state(`clicked`)).toBe(false)
    expect(mounted.find(`.body`).length).toBe(0)

    mounted.find(`.title`).simulate(`click`)
    expect(mounted.state(`clicked`)).toBe(true)
    expect(mounted.find(`.body`).length).toBe(1)

    mounted.find(`.title`).simulate(`click`)
    expect(mounted.state(`clicked`)).toBe(false)
    expect(mounted.find(`.body`).length).toBe(0)
  })
})
