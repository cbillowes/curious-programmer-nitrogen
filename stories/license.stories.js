import React from "react"
import { storiesOf } from "@storybook/react"
import License from "../src/components/license"
import Page from "./_helpers"

storiesOf("Components", module).add("license", () => (
  <Page>
    <License />
  </Page>
))
