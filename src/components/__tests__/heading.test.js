import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { componentTranslatesTo } from './helpers'
import { H1, H2, H3, H4 } from '../heading'

Enzyme.configure({ adapter: new Adapter() })

describe('Heading', () => {

  it('should render level one', () => {
    const hasTranslated = componentTranslatesTo(
      <H1>This is a h1</H1>,
      <h1>This is a h1</h1>
    )
    expect(hasTranslated).toBe(true)
  })

  it('should render level two', () => {
    const hasTranslated = componentTranslatesTo(
      <H2>This is a h2</H2>,
      <h2>This is a h2</h2>
    )
    expect(hasTranslated).toBe(true)
  })

  it('should render level three', () => {
    const hasTranslated = componentTranslatesTo(
      <H3>This is a h3</H3>,
      <h3>This is a h3</h3>
    )
    expect(hasTranslated).toBe(true)
  })

  it('should render level four', () => {
    const hasTranslated = componentTranslatesTo(
      <H4>This is a h4</H4>,
      <h4>This is a h4</h4>
    )
    expect(hasTranslated).toBe(true)
  })

})
