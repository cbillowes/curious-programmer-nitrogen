import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MenuItems from '../menuItems'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu items', () => {
  it('should render an item', () => {
    const rendered = shallow(<MenuItems path='/blog' />)
    const state = rendered.state()
    const expected = { path: `/blog` }
    expect(state).toStrictEqual(expected)
  })
})
