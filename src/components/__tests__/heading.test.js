import React from 'react'
import { getMountedComponent } from "./_helpers"
import { H1, H2, H3, H4 } from "../heading"

describe(`Heading`, () => {

  describe(`should render`, () => {

    it(`h1`, () => {
      const heading = getMountedComponent(<H1 />)
      expect(heading).toBeDefined()
    })

    it(`h2`, () => {
      const heading = getMountedComponent(<H2 />)
      expect(heading).toBeDefined()
    })

    it(`h3`, () => {
      const heading = getMountedComponent(<H3 />)
      expect(heading).toBeDefined()
    })

    it(`h4`, () => {
      const heading = getMountedComponent(<H4 />)
      expect(heading).toBeDefined()
    })

  })

  describe(`should display heading for`, () => {

    it(`h1`, () => {
      const heading = getMountedComponent(<H1>Don't Panic.</H1>)
      expect(heading.text()).toEqual(`Don't Panic.`)
    })

    it(`h2`, () => {
      const heading = getMountedComponent(<H2>Time is an illusion. Lunchtime doubly so.</H2>)
      expect(heading.text()).toEqual(`Time is an illusion. Lunchtime doubly so.`)
    })

    it(`h3`, () => {
      const heading = getMountedComponent(<H3>So long and thanks for all the fish</H3>)
      expect(heading.text()).toEqual(`So long and thanks for all the fish`)
    })

    it(`h4`, () => {
      const heading = getMountedComponent(<H4>The ships hung in the sky in much the same way that bricks don't.</H4>)
      expect(heading.text()).toEqual(`The ships hung in the sky in much the same way that bricks don't.`)
    })

  })

  describe(`should set the class for`, () => {

    it(`h1`, () => {
      const heading = getMountedComponent(<H1 className="one" />)
      expect(heading.hasClass(`one`)).toBe(true)
    })

    it(`h2`, () => {
      const heading = getMountedComponent(<H2 className="two" />)
      expect(heading.hasClass(`two`)).toBe(true)
    })

    it(`h3`, () => {
      const heading = getMountedComponent(<H3 className="three" />)
      expect(heading.hasClass(`three`)).toBe(true)
    })

    it(`h4`, () => {
      const heading = getMountedComponent(<H4 className="four" />)
      expect(heading.hasClass(`four`)).toBe(true)
    })

  })

})