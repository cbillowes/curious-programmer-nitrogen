import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Tag from '../tag'

Enzyme.configure({ adapter: new Adapter() })

describe('Tag', () => {

  it('needs a tag to render', () => {
    expect(() => shallow(<Tag />)).toThrow()
  })

  it('should render clickable when a slug is provided', () => {
    const wrapper = shallow(
      <Tag tag="hello world" slug="/tags/hello-world" />
    )

    const rendered = wrapper.html()
    expect(rendered.indexOf(`href="/tags/hello-world"`)).toBeGreaterThan(-1)
    expect(rendered.indexOf(`hello world`)).toBeGreaterThan(-1)
  })

  it('should display the tag in lowercase', () => {
    const wrapper = shallow(<Tag tag="HELLO GALAXY" slug="/tags/hello-galaxy" />)

    const rendered = wrapper.html()
    expect(rendered.indexOf(`href="/tags/hello-galaxy"`)).toBeGreaterThan(-1)
    expect(rendered.indexOf(`hello galaxy`)).toBeGreaterThan(-1)
  })

  it('should render as bare when no slug is provided', () => {
    const wrapper = shallow(<Tag tag="hello universe" />)

    const rendered = wrapper.html()
    expect(rendered.indexOf(`href`)).toBe(-1)
    expect(rendered.indexOf(`hello universe`)).toBeGreaterThan(-1)
  })

  it('should render as disabled when told to do so', () => {
    const wrapper = shallow(<Tag tag="hello multiverse" disabled="true" />)

    const rendered = wrapper.html()
    expect(rendered.indexOf(`href`)).toBe(-1)
    expect(rendered.indexOf(`hello multiverse`)).toBeGreaterThan(-1)
    expect(rendered.indexOf(`data-disabled="true"`)).toBeGreaterThan(-1)
  })

})
