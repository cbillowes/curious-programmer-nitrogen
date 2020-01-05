import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { validateValues } from './helpers'
import Constants from './const'
import Tag from '../tag'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return <Tag 
            tag={props.tag} 
            slug={props.slug}
            disabled={props.disabled} 
          />
}

describe('Tag', () => {

  it('needs a tag to render', () => {
    expect(() => shallow(<Tag />)).toThrow()
  })

  it('should render clickable when a slug is provided', () => {
    const validation = validateValues(
      sut({
        tag: "hello world",
        slug: "/tags/hello-world",
      }),
      [
        {contains: false, value: `data-disabled="true"`},
        {contains: true, value: `href="/tags/hello-world"`},
        {contains: true, value: `<span class="${Constants.TAG_CLASS}">hello world</span>`}
      ],
    )
    expect(validation).toBe(true)
  })

  it('should display the tag in lowercase', () => {
    const validation = validateValues(
      sut({
        tag: "HELLO GALAXY",
        slug: "/tags/hello-galaxy",
      }),
      [
        {contains: false, value: `data-disabled="true"`},
        {contains: true, value: `href="/tags/hello-galaxy"`},
        {contains: true, value: `<span class="${Constants.TAG_CLASS}">hello galaxy</span>`}
      ],
    )
    expect(validation).toBe(true)
  })

  it('should render as bare when no slug is provided', () => {
    const validation = validateValues(
      sut({
        tag: "hello universe",
      }),
      [
        {contains: false, value: `data-disabled="true"`},
        {contains: false, value: `href`},
        {contains: true, value: `hello universe`},
      ],
    )
    expect(validation).toBe(true)
  })

  it('should render as disabled when told to do so', () => {
    const validation = validateValues(
      sut({
        tag: "hello multiverse",
        disabled: "true",
      }),
      [
        {contains: false, value: `href`},
        {contains: true, value: `hello multiverse`},
        {contains: true, value: `data-disabled="true"`},
      ],
    )
    expect(validation).toBe(true)
  })

})
