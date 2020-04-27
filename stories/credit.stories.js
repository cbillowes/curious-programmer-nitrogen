import React from "react"
import { storiesOf } from "@storybook/react"
import Credit from "../src/components/credit"
import Page from "./_helpers"

storiesOf("Components/credit", module)
  .add("no click-through", () => (
    <Page>
      <Credit title="Important">
        This is a super duper important credit but does not link to any
        resource.
      </Credit>
    </Page>
  ))
  .add("click-through", () => (
    <Page>
      <Credit to="https://www.google.com" title="Google">
        A super fast and popular search engine.
      </Credit>
    </Page>
  ))
  .add("snippet", () => (
    <Page>
      <Credit title="Important">
        This is a super duper important credit but does not link to any
        resource.
      </Credit>

      <Credit to="https://www.google.com" title="Google">
        A super fast and popular search engine.
      </Credit>
    </Page>
  ))
