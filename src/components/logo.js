import React from "react"
import Anchor from "./anchor"
import "../styles/logo.scss"

function Logo() {
  return (
    <h1 className="logo">
      <Anchor to="/" title="Curious Programmer" className="full">
        <strong>&#123;</strong> :curious <strong>"programmer"</strong>{" "}
        <strong>&#125;</strong>
      </Anchor>

      <Anchor to="/" title="Curious Programmer" className="partial">
        <strong>&#123; &#125;</strong>
      </Anchor>
    </h1>
  )
}

export default Logo
