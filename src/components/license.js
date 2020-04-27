import React from "react"
import Anchor from "./anchor"

const CreativeCommonsLogo = () => {
  return (
    <span className="creative-commons-logo">
      <Anchor
        to="http://creativecommons.org/licenses/by-sa/4.0/"
        className="plain"
      >
        <img
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
          title="Creative Commons Attribution-ShareAlike 4.0 International License"
        />
      </Anchor>
    </span>
  )
}

const Author = () => {
  return (
    <Anchor to="/about" className="underline-only">
      Clarice Bouwer
    </Anchor>
  )
}

const CreativeCommonsLicense = () => {
  return (
    <Anchor
      to="https://creativecommons.org/licenses/by-sa/4.0/"
      className="underline-only"
    >
      Creative Commons Attribution-ShareAlike 4.0 International License
    </Anchor>
  )
}

const CodeLicense = () => {
  return (
    <Anchor to="/license" className="underline-only">
      license
    </Anchor>
  )
}

const PrivacyPolicy = () => {
  return (
    <Anchor to="/privacy-policy" className="underline-only">
      privacy policy
    </Anchor>
  )
}

const GitHub = () => {
  return (
    <Anchor
      to="https://github.com/cbillowes/curious-programmer-nitrogen"
      className="underline-only"
    >
      GitHub
    </Anchor>
  )
}

const License = () => {
  return (
    <>
      <div className="license">
        <p>
          <CreativeCommonsLogo />
          The content is written by <Author /> and is licensed under the{" "}
          <CreativeCommonsLicense />. References to external resources are
          subject to their own terms and conditions. There is a <CodeLicense />{" "}
          for the code. It's probably a good idea to read the <PrivacyPolicy />.
          The website is open-source and is available on <GitHub />. Please give
          it a star if you think it is cool.
          <br />
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
    </>
  )
}

export default License
