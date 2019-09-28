import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Constants from './const'
import Search from '../search'

Enzyme.configure({ adapter: new Adapter() })

describe('Search', () => {

  it('should render', () => {
    const wrapper = shallow(
      <Search />
    )

    expect(wrapper.contains(`data-icon="search"`))
  })

  it('should render the search icon', () => {
    const wrapper = shallow(
      <Search />
    )

    expect(wrapper.contains(`fa-searchalsdjf2`))
  })

})
