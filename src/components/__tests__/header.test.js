import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Constants from "./const"
import Header from '../header'
import Logo from '../logo'
import Search from '../search'
import Menu from '../menu'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading', () => {

  it('should render', () => {
    const wrapper = shallow(
      <Header />
    )

    expect(wrapper.html().indexOf(`header`)).toBeGreaterThan(-1)
  })

  it('should render the logo', () => {
    const wrapper = shallow(
      <Header />
    )

    expect(wrapper.contains(<Logo />)).toEqual(true)
  })

  it('should render the search button', () => {
    const wrapper = shallow(
      <Header />
    )

    expect(wrapper.contains(<Search />)).toEqual(true)
  })

  it('should render the menu button', () => {
    const wrapper = shallow(
      <Header />
    )

    expect(wrapper.contains(<Menu />)).toEqual(true)
  })

})
