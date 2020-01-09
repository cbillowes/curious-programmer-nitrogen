import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues } from './helpers'
import Footer from '../footer'

Enzyme.configure({ adapter: new Adapter() })

function sut() {
  return (
    <Footer />
  )
}

describe('Anchor', () => {

  it('should render the intro', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `A curious place for a curious mind.`},
        {contains: true, value: `Copyright © ${new Date().getFullYear()}`},
        {contains: true, value: `https://www.gatsbyjs.org`},
        {contains: true, value: `/credits`},
        {contains: true, value: `data-component="footer-intro-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should render the license', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `http://creativecommons.org/licenses/by-sa/4.0/`},
        {contains: true, value: `https://i.creativecommons.org/l/by-sa/4.0/88x31.png`},
        {contains: true, value: `https://www.gatsbyjs.org`},
        {contains: true, value: `/about`},
        {contains: true, value: `/license`},
        {contains: true, value: `/privacy-policy`},
        {contains: true, value: `data-component="footer-license-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should render social icons', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `https://www.linkedin.com/in/cbouwer`},
        {contains: true, value: `https://twitter.com/cbillowes`},
        {contains: true, value: `https://github.com/cbillowes`},
        {contains: true, value: `data-component="footer-social-icons-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

})
