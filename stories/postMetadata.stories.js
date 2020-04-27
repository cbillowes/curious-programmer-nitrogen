import React from "react"
import { storiesOf } from "@storybook/react"
import PostMetadata from "../src/components/postMetadata"

storiesOf("Components/post", module).add("metadata", () => (
  <PostMetadata
    moment="5 days ago"
    date="1 April 2019"
    author="Clarice Bouwer"
    ttr={42}
  />
))
