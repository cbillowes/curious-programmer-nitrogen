import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import ExternalLink from '../link'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <ExternalLink 
      to={props.to}
    >
      {props.children}
    </ExternalLink>
  )
}

describe('External link', () => {

  it('should render the moment', () => {
    const contains = containsElement(
      sut({
        to: `http://www.google.com/`,
        children: `Google`
      }),
      <a href="http://www.google.com/" rel="nofollow noopener noreferrer">Google</a>
    )
    expect(contains).toBe(true)
  })

})
