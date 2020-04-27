import React from "react"
import { storiesOf } from "@storybook/react"
import ShowMore from "../src/components/showMore"
import Page from "./_helpers"

storiesOf("Components", module).add("show more", () => (
  <Page>
    <ShowMore to="/archives" title="Show more articles" />
  </Page>
))
