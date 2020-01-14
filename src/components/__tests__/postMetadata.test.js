import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import PostMetadata from '../postMetadata'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <PostMetadata 
      date={props.date}
      author={props.author}
      ttr={props.ttr}
    />
  )
}

describe('Post', () => {

  it('should render the date', () => {
    const contains = containsElement(
      sut({
        date: `1 April 2019`,
      }),
      <time dateTime="1554062400000">
        Monday, 1 April 2019
      </time>
    )
    expect(contains).toBe(true)
  })

  it('should render the default author', () => {
    const contains = containsElement(
      sut({
        author: ``,
      }),
      <span data-container="metadata-author">
        by Clarice Bouwer
      </span>
    )
    expect(contains).toBe(true)
  })

  it('should render the author', () => {
    const contains = containsElement(
      sut({
        author: `Douglas Adams`,
      }),
      <span data-container="metadata-author">
        by Douglas Adams
      </span>
    )
    expect(contains).toBe(true)
  })

  it('should render the time to read', () => {
    const contains = containsElement(
      sut({
        ttr: `15`,
      }),
      <span data-container="metadata-ttr">
        (Est. 15 minute read)
      </span>
    )
    expect(contains).toBe(true)
  })

})
