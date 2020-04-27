import React from "react"
import ReadingPane from "../readingPane"
import { getSnapshot } from "./_helpers"

describe(`Reading pane`, () => {
  it(`should render`, () => {
    const component = (
      <ReadingPane heading="Don't panic.">
        <p>
          One early morning, Arthur's friend, who's actually an alien, informs
          him of Earth's impending doom and whisks him away in a spaceship.
          While Arthur deals with his woes, he also has a great adventure.
        </p>
      </ReadingPane>
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
