import React from 'react'
import Anchor from './anchor'

const CreativeCommonsLogo = () => {
  return (
    <span>
      <Anchor
        to="http://creativecommons.org/licenses/by-sa/4.0/"
      >
        <img
          className="creative-commons-logo"
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
          title="Creative Commons Attribution-ShareAlike 4.0 International License"
        />
      </Anchor>
    </span>
  )
}

function Author() {
  return (
    <Anchor
      to="/about"
    >
      Clarice Bouwer
    </Anchor>
  )
}

function CreativeCommonsLicense() {
  return (
    <Anchor
      to="https://creativecommons.org/licenses/by-sa/4.0/"
    >
      Creative Commons Attribution-ShareAlike 4.0 International License
    </Anchor>
  )
}

function CodeLicense() {
  return (
    <Anchor
      to="/license"
    >
      license
    </Anchor>
  )
}

function PrivacyPolicy() {
  return (
    <Anchor
      to="/privacy-policy"
    >
      privacy policy
    </Anchor>
  )
}

function GitHub() {
  return (
    <Anchor
      to="https://github.com/cbillowes/curious-programmer-nitrogen"
    >
      GitHub
    </Anchor>
  )
}

function License() {
  return (
    <>
      <CreativeCommonsLogo />
      <span>
        <p>
          The content is written by <Author /> and is licensed under the <CreativeCommonsLicense />.
          References to external resources are subject to their own terms and conditions.
          There is a <CodeLicense /> for the code.
          It's probably a good idea to read the <PrivacyPolicy />.
          The website is open-source and is available on <GitHub />.
          Please give it a star if you think it is cool.
        </p>
      </span>
    </>
  )
}

export default License
