import React from "react"
import { storiesOf } from "@storybook/react"
import Thumbnail from "../src/components/thumbnail"
import Page from "./_helpers"

const Container = ({ children }) => {
  return (
    <Page>
      <div style={{ width: "300px" }}>
        {children}
      </div>
    </Page>
  )
}

storiesOf("Components/thumbnail", module)
  .add("default image", () => (
    <Container>
      <Thumbnail
        number={42}
      />
    </Container>
  ))
  .add("specified image", () => (
    <Container>
      <Thumbnail
        number={42}
        photo="default-01.jpg"
        credit="Douglas Adams"
        creditLink="https://www.douglas.adams"
        creditSource="personal"
      />
    </Container>
  ))
  .add("missing attribution", () => (
    <Container>
      <Thumbnail
        number={42}
        photo="default-01.jpg"
      />
    </Container>
  ))
  .add("landscape", () => (
    <Container>
      <Thumbnail
        number={42}
        display="landscape"
        photo="default-02.jpg"
      />
    </Container>
  ))
  .add("square", () => (
    <Container>
      <Thumbnail
        number={42}
        display="square"
        photo="default-03.jpg"
      />
    </Container>
  ))
  .add("with link", () => (
    <Container>
      <Thumbnail
        number={42}
        to="/blog"
        display="square"
        photo="default-03.jpg"
      />
    </Container>
  ))
