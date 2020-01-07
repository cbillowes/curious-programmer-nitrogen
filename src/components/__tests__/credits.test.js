import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Credit from '../credit'
import { External } from "../tag"

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Credit 
      to={props.to} 
      title={props.title}
    >
      {props.children}
    </Credit>
  )
}

describe('Credit', () => {

  it('should render a clickable tag to an external resource', () => {
    const contains = containsElement(
      sut({
        to: `https://www.google.com/`,
        title: `Google`,
      }),
      <External 
        to="https://www.google.com/"
      >
        Google
      </External>,
    )
    expect(contains).toBe(true)
  })

  it('should display content for that credit', () => {
    const contains = containsElement(
      sut({
        children: <div>Hello World</div>,
      }),
      <div>Hello World</div>
    )
    expect(contains).toBe(true)
  })

})
