import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import { BlandExternalLink } from '../link'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <BlandExternalLink 
      to={props.to}
    >
      {props.children}
    </BlandExternalLink>
  )
}

describe('External link', () => {

  it('should render an unstyled external link', () => {
    const contains = containsElement(
      sut({
        to: `http://www.google.com/`,
        children: `Google`
      }),
      <a href="http://www.google.com/" rel="nofollow noopener noreferrer" target="_blank">Google</a>
    )
    expect(contains).toBe(true)
  })

})
