import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsValue, doesNotContainValue } from './helpers'
import ShowMore from '../showMore'

Enzyme.configure({ adapter: new Adapter() })

function sut() {
  return (
    <ShowMore />
  )
}

describe('Search', () => {

  it('should render the show more icon', () => {
    const iconClass = `ellipsis-h`
    const contains = containsValue(
      sut({}), 
      iconClass,
    )
    expect(contains).toBe(true)
  })
 
  it('should redirect to the archives page', () => {
    const link = "/archives"
    const contains = containsValue(
      sut({}),
      link
    )
    expect(contains).toBe(true)
  })

})
