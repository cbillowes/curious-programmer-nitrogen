import React from 'react'
import Anchor from '../anchor'
import { getHtmlComponent, validateValues } from './_helpers'


function sut(props) {
  return (
    <Anchor
      to={props.to}
      title={props.title}
    >
      {props.children}
    </Anchor>
  )
}

describe(`Anchor`, () => {

  it(`should not render when there is nowhere to link to`, () => {
    const anchor = getHtmlComponent(sut({}))
    expect(anchor).toBeNull()
  })

  describe(`should render`, () => {

    describe(`an external link`, () => {

      it(`for an http/https protocol`, () => {
        const anchor = sut({
          to: `https://curiousprogrammer.dev`,
          title: `A link to my blog`,
          children: `Curious Programmer`,
        })
        const matches = validateValues(anchor, [
          { contains: true, value: `href="https://curiousprogrammer.dev"` },
          { contains: true, value: `rel="nofollow noopener noreferrer` },
          { contains: true, value: `title="A link to my blog"` },
          { contains: true, value: "Curious Programmer" },
          { contains: true, value: `target="_blank` },
        ])
        expect(matches).toBeTruthy()
      })

      it(`for a mailto: protocol`, () => {
        const anchor = sut({
          to: `mailto:clarice@bouwer.dev`,
          title: `Get in touch with me`,
          children: `clarice@bouwer.dev`,
        })
        const matches = validateValues(anchor, [
          { contains: true, value: `href="mailto:clarice@bouwer.dev"` },
          { contains: true, value: `rel="nofollow noopener noreferrer"` },
          { contains: true, value: `title="Get in touch with me"` },
          { contains: true, value: "clarice@bouwer.dev" },
          { contains: true, value: `target="_blank` },
        ])
        expect(matches).toBeTruthy()
      })

    })

    it(`an internal link`, () => {
      const anchor = sut({
        to: `/blog`,
        title: `My Blog`,
        children: `This is a link to the home page of my blog`,
      })
      const matches = validateValues(anchor, [
        { contains: true, value: `href="/blog"` },
        { contains: true, value: `title="My Blog"` },
        { contains: true, value: "This is a link to the home page of my blog" },
        { contains: false, value: `target=` },
        { contains: false, value: `rel=` },
      ])
      expect(matches).toBeTruthy()
    })
  })

})



