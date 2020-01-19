import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import PostNavigation from '../postNavigation'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <PostNavigation 
      previous={props.previous}
      next={props.next}
    />
  )
}

function post() {
  return {
    title: `A whole new world`,
    expect: `rog avast overhaul swab hail-shot gibbet dance the hempen jig spirits hempen halter prow.`,
    date: `1 April 2019`,
    ttr: `15`,
    author: `Douglas Adams`,
  }
}

describe('Post', () => {

  it('should render the previous post', () => {
    const previous = post()
    const contains = containsElement(
      sut({
        previous: previous,
      }),
      <PostNavigation
        previous={previous}
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the next post', () => {
    const next = post()
    const contains = containsElement(
      sut({
        next: next,
      }),
      <PostNavigation
        next={next}
      />
    )
    expect(contains).toBe(true)
  })

})
