import React from "react"
import { storiesOf } from "@storybook/react"
import CreditsPage from "../src/components/pages/credits"
import LicensePage from "../src/components/pages/license"

storiesOf("Layout/pages", module)
  .add("credits", () => <CreditsPage />)
  .add("license", () => <LicensePage />)
