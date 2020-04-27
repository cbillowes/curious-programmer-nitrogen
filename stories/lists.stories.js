import React from "react"
import { storiesOf } from "@storybook/react"
import Page from "./_helpers"

storiesOf("Typography/list", module)
  .add("unordered", () => (
    <Page>
      <br />
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Duis a arcu ac felis elementum iaculis.</li>
        <li>Nam id consequat elit</li>
      </ul>
    </Page>
  ))
  .add("ordered", () => (
    <Page>
      <br />
      <ol>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Duis a arcu ac felis elementum iaculis.</li>
        <li>Nam volutpat purus nec vehicula aliquam</li>
      </ol>
    </Page>
  ))
