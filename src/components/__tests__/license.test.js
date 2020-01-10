import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues } from './helpers'
import License from '../license'

Enzyme.configure({ adapter: new Adapter() })

function sut() {
  return (
    <License />
  )
}

describe('Anchor', () => {

  it('should render the copyright image', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `http://creativecommons.org/licenses/by-sa/4.0/"`},
        {contains: true, value: `Creative Commons License`},
        {contains: true, value: `https://i.creativecommons.org/l/by-sa/4.0/88x31.png`},
        {contains: true, value: `Creative Commons Attribution-ShareAlike 4.0 International License`},
        {contains: true, value: `data-component="license-copyright-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

  it('should render the copyright text', () => {
    const validation = validateValues(
      sut(),
      [
        {contains: true, value: `http://creativecommons.org/licenses/by-sa/4.0/"`},
        {contains: true, value: `/about`},
        {contains: true, value: `/license`},
        {contains: true, value: `/privacy-policy`},
        {contains: true, value: `data-component="license-text-element"`},
      ]
    )
    expect(validation).toBe(true)
  })

})
