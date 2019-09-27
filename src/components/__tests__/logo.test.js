import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Constants from './const'
import Logo from '../logo'

Enzyme.configure({ adapter: new Adapter() })

describe('Logo', () => {

  it('should render', () => {
    const wrapper = shallow(
      <Logo />
    )

    expect(wrapper.contains(`<strong>&#123;</strong> :curious <strong>"programmer"</strong> <strong>&#125;</strong>`))
  })

  it('should link to the home page', () => {
    const wrapper = shallow(
      <Logo />
    )

    const rendered = wrapper.html()
    expect(rendered.indexOf(`href="/"`)).toBeGreaterThan(-1)
  })

  it('should render the logo content', () => {
    const wrapper = shallow(
      <Logo />
    )

    const rendered = wrapper.html()
    expect(rendered.indexOf(`<strong>{</strong> :curious <strong>&quot;programmer&quot;</strong> <strong>}</strong>`)).toBeGreaterThan(-1)
  })

})
