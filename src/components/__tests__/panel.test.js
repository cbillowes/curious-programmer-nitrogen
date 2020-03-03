//TODO: component state testing template
import React from 'react'
import Panel from '../panel'
import { getSnapshot, getMount, raiseEventOnElement } from './_helpers'

describe(`Panel`, () => {
  it(`should not render without a title`, () => {
    const panel = (
      <Panel />
    )
    const tree = getSnapshot(panel)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render without children elements`, () => {
    const panel = (
      <Panel
        title="Want to hire me?"
      />
    )
    const tree = getSnapshot(panel)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render children unless the title has been clicked on`, () => {
    const panel = (
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
    const tree = getSnapshot(panel)
    expect(tree).toMatchSnapshot()
  })

  it(`should render`, () => {
    const panel = (
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
    const component = getMount(panel)
    component.find(`.title`).simulate(`click`)

    const tree = getSnapshot(component.find(`.panel`))
    expect(tree).toMatchSnapshot()
  })

  it(`should be able to toggle`, () => {
    const panel = (
      <Panel title="Want to hire me?">
        <p>
          <strong>I am NOT on the market at the moment.</strong>
        </p>
      </Panel>
    )
    const component = getMount(panel)
    expect(component.state(`clicked`)).toBe(false)
    expect(component.find(`.body`).length).toBe(0)

    component.find(`.title`).simulate(`click`)
    expect(component.state(`clicked`)).toBe(true)
    expect(component.find(`.body`).length).toBe(1)

    component.find(`.title`).simulate(`click`)
    expect(component.state(`clicked`)).toBe(false)
    expect(component.find(`.body`).length).toBe(0)
  })
})
