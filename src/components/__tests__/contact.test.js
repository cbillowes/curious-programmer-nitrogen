import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues } from './helpers'
import Contact from '../contact'

Enzyme.configure({ adapter: new Adapter() })

function sut() {
  return (
    <Contact />
  )
}

describe('Contact', () => {

  it('should generate contact methods', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `mailto:clarice@bouwer.dev`},
        {contains: true, value: `https://twitter.com/cbillowes`},
        {contains: true, value: `https://stackoverflow.com/users/849986/clarice-bouwer`},
        {contains: true, value: `https://github.com/cbillowes`},
        {contains: true, value: `https://www.linkedin.com/in/cbouwer`},
        {contains: true, value: `data-component="contact-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

})
