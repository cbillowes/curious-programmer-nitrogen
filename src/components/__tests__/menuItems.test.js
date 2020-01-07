import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue, getState } from './helpers'
import MenuItems from '../menuItems'
import Data from '../../../gatsby-data'

const Nav = Data.navigation

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <MenuItems
      path={props.path}
    />
  )
}

describe('Menu items', () => {
  it('should render an item', () => {
    const state = getState(
      sut({
        path: `/blog`,
      })
    )
    expect(state).toStrictEqual({ path: `/blog` })
  })

  it('should contain the navigation items', () => {
    Nav.map(function(item) {
      const contains = containsValue(
        sut({}),
        `<a href="${item.to}">${item.name}</a>`,
      )
      expect(contains).toBe(true)
    })
  })
})
