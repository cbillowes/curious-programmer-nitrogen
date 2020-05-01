import React from "react"
import { storiesOf } from "@storybook/react"
import Anchor from "../src/components/anchor"
import Page from "./_helpers"

storiesOf("Components/anchor", module)
  .add("internal", () => (
    <Page>
      <p>
        <strong>Internal link in a sentence:</strong> I have been a software
        developer for over 10 years. Find out more
        <Anchor to="/about" title="About">
          about
        </Anchor>
        me and feel free to get in touch.
      </p>
    </Page>
  ))
  .add("external", () => (
    <Page>
      <p>
        <strong>External links in a sentence:</strong> I share what I learn with
        others. My blog,
        <Anchor to="https://curiousprogrammer.dev" title="Curious Programmer">
          Curious Programmer
        </Anchor>
        , is available. It is written in
        <Anchor to="https://www.gatsbyjs.org/" title="Gatsby">
          Gatsby
        </Anchor>
        and hosted on
        <Anchor to="https://www.netlify.com/" title="Netlify">
          Netlify
        </Anchor>
        . This link has not been
        <Anchor to="http://this.does.not.exist" title="Unvisitable">
          visited
        </Anchor>
        yet.
      </p>
    </Page>
  ))
  .add("unvisited link", () =>
    <Page>
      <p>
        <strong>Guaranteed unvisited link:</strong> To make 100% sure, here is a
        link I<Anchor to="https://unvisited.link">haven't</Anchor>
        visited yet.
      </p>
    </Page>
  )
  .add("group", () => (
    <Page>
      <p>
        <strong>Links all together now: </strong>
        <Anchor to="https://link.one" title="Gatsby">
          One
        </Anchor>
        <Anchor to="https://link.two" title="Netlify">
          Two
        </Anchor>
        <Anchor to="https://link.three" title="Netlify">
          Three
        </Anchor>
      </p>
    </Page>
  ))
