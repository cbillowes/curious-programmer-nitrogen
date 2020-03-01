import React from 'react'
import Anchor from './anchor'

const CreativeCommonsLogo = () => {
  return (
    <span
      data-component="license-creative-commons-logo"
    >
      <Anchor
        to="http://creativecommons.org/licenses/by-sa/4.0/"
        defaultStyle="true"
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
      data-component="license-author"
    >
      Clarice Bouwer
    </Anchor>
  )
}

function CreativeCommonsLicense() {
  return (
    <Anchor
      to="https://creativecommons.org/licenses/by-sa/4.0/"
      data-component="license-creative-commons-license"
    >
      Creative Commons Attribution-ShareAlike 4.0 International License
    </Anchor>
  )
}

function CodeLicense() {
  return (
    <Anchor
      to="/license"
      data-component="license-code-license"
    >
      license
    </Anchor>
  )
}

function PrivacyPolicy() {
  return (
    <Anchor
      to="/privacy-policy"
      data-component="license-privacy-policy"
    >
      privacy policy
    </Anchor>
  )
}

function GitHub() {
  return (
    <Anchor
      to="https://github.com/cbillowes/curious-programmer-nitrogen"
      data-component="license-github"
    >
      GitHub
    </Anchor>
  )
}

function License() {
  return (
    <>
      <CreativeCommonsLogo />
      <span data-component="license-text-element">
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
