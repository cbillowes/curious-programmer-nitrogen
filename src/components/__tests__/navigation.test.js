import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Navigation from '../navigation'

Enzyme.configure({ adapter: new Adapter() })

describe('Navigation', () => {

   it ('should render', () => {
    const wrapper = shallow(
      <Navigation />
    )

    const rendered = wrapper.html()
    expect(rendered.startsWith(`<nav`)).toBe(true)
  }) 
  
  it ('should render active item', () => {
    const wrapper = shallow(
      <Navigation path="/blog" />
    )

    const activeClass = "sc-bwzfXH sc-htpNat fmhEmn"
    const rendered = wrapper.html()
    expect(rendered.indexOf(`<span class="${activeClass}"><a href="/blog">Blog</a></span>`)).toBeGreaterThan(-1)
  })

})
