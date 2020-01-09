import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import { H1, H2, H3, H4 } from '../heading'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading', () => {

  it('should render level one', () => {
    const contains = containsElement(
      <H1>
        I am a big bold heading
      </H1>,
      <h1>
        I am a big bold heading
      </h1>,
    )
    expect(contains).toBe(true)
  })

  it('should render level two', () => {
    const contains = containsElement(
      <H2>
        I am a big bold heading
      </H2>,
      <h2>
        I am a big bold heading
      </h2>,
    )
    expect(contains).toBe(true)
  })

  it('should render level three', () => {
    const contains = containsElement(
      <H3>
        I am a big bold heading
      </H3>,
      <h3>
        I am a big bold heading
      </h3>,
    )
    expect(contains).toBe(true)
  })

  it('should render level four', () => {
    const contains = containsElement(
      <H4>
        I am a big bold heading
      </H4>,
      <h4>
        I am a big bold heading
      </h4>,
    )
    expect(contains).toBe(true)
  })

})
