import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import PostMetadata from '../postMetadata'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return <PostMetadata 
           moment={props.moment}
           date={props.date}
           author={props.author}
           ttr={props.ttr}
         />
}

describe('Post', () => {

  it('should render the moment', () => {
    const contains = containsElement(
      sut({
        moment: `a year ago`,
      }),
      <span>a year ago</span>
    )
    expect(contains).toBe(true)
  })

  it('should render the date', () => {
    const contains = containsElement(
      sut({
        date: `1 April 2019`,
      }),
      <span>1 April 2019</span>
    )
    expect(contains).toBe(true)
  })

  it('should render the author', () => {
    const contains = containsElement(
      sut({
        author: `Clarice Bouwer`,
      }),
      <span>Clarice Bouwer</span>
    )
    expect(contains).toBe(true)
  })

  it('should render the time to read', () => {
    const contains = containsElement(
      sut({
        ttr: `15`,
      }),
      <span><em>(Est. 15 minute read)</em></span>
    )
    expect(contains).toBe(true)
  })

})
