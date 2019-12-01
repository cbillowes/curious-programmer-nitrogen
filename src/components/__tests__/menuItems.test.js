import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { getState } from './helpers'
import MenuItems from '../menuItems'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu items', () => {
  it('should render an item', () => {
    const state = getState(
      <MenuItems path='/blog' />,
    )
    expect(state).toStrictEqual({ path: `/blog` })
  })
})
