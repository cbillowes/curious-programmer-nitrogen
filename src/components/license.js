import React from 'react'
import styled from 'styled-components'
import Anchor from './anchor'

const Paragraph = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`

const CopyrightImage = styled.img`
  margin-top: 1.75rem;
  margin-right: .75rem;
  float: left;
`

const Icon = () => {
  return (
    <span data-component="license-copyright-element">
      <Anchor 
        to="http://creativecommons.org/licenses/by-sa/4.0/" 
        bland="true"
      >
        <CopyrightImage 
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
          title="Creative Commons Attribution-ShareAlike 4.0 International License"
        />
      </Anchor>
    </span>
  )
}

function License ({ theme }) {
  return (
    <>
      <Icon />
      <div data-component="license-text-element">
        <Paragraph>
          The content is written by 
          <Anchor to="/about">Clarice Bouwer</Anchor> and is licensed under the 
          <Anchor to="https://creativecommons.org/licenses/by-sa/4.0/">
            Creative Commons Attribution-ShareAlike 4.0 International License
          </Anchor>.
          References to external resources are subject to their own terms and conditions.
          Also, there is a <Anchor to="/license">license</Anchor> 
          for the code and it's probably a good idea to read the 
          <Anchor to="/privacy-policy">Privacy Policy</Anchor>.
        </Paragraph>
        <Paragraph>
          The website is open-source and is available on <Anchor to="https://github.com/cbillowes/curious-programmer-nitrogen">GitHub</Anchor>.
          Please give it a star if you think it is cool.
        </Paragraph>
      </div>
    </>
  )
}

export default License
