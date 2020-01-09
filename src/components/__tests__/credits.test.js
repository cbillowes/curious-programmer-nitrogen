import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Credit from '../credit'
import { Bare, External } from "../tag"

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

  it('should render a simple tag for a resource that is not linked', () => {
    const contains = containsElement(
      sut({
        title: `I don't link to anywhere`,
        children: `Hello world`,
      }),
      <div>
        <Bare>
          I don't link to anywhere
        </Bare>
        Hello world
      </div>,
    )
    expect(contains).toBe(true)
  })

  it('should render a clickable tag to an external resource', () => {
    const contains = containsElement(
      sut({
        to: `https://www.google.com/`,
        title: `Google`,
        children: `Take me to the Googles`
      }),
      <div>
        <External 
          to="https://www.google.com/"
        >
          Google
        </External>
        Take me to the Googles
      </div>,
    )
    expect(contains).toBe(true)
  })

})
