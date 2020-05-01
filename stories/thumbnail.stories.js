import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "../src/components/thumbnail"
import Page from "./_helpers"

storiesOf("Components/thumbnail", module)
  .add("default image", () => (
    <Page>
      <Thumbnail
        number={42}
      />
    </Page>
  ))
  .add("specified image", () => (
    <Page>
      <Thumbnail
        number={42}
        photo="default-01.jpg"
        credit="Douglas Adams"
        creditLink="https://www.douglas.adams"
        creditSource="personal"
      />
    </Page>
  ))
  .add("missing attribution", () => (
    <Page>
      <Thumbnail
        number={42}
        photo="default-01.jpg"
      />
    </Page>
  ))
