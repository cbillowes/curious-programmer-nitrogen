import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
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

    const rendered = wrapper.html()
    expect(rendered.indexOf(`header`)).toBeGreaterThan(-1)
  })

  it('should render the logo', () => {
    const header = shallow(
      <Header />
    )
    const logo = shallow(
      <Logo />
    )
    const renderedHeader = header.html()
    const renderedLogo = logo.html()
    expect(renderedHeader.indexOf(renderedLogo)).toBeGreaterThan(-1)
  })

  it('should render the search button', () => {
    const header = shallow(
      <Header />
    )
    const search = shallow(
      <Search />
    )
    const renderedHeader = header.html()
    const renderedSearch = search.html()

    expect(renderedHeader.indexOf(renderedSearch)).toBeGreaterThan(-1)
  })

  it('should render the menu button', () => {
    const header = shallow(
      <Header />
    )
    const menu = shallow(
      <Menu />
    )
    const renderedHeader = header.html()
    const renderedMenu = menu.html()

    expect(renderedHeader.indexOf(renderedMenu)).toBeGreaterThan(-1)
  })

})
