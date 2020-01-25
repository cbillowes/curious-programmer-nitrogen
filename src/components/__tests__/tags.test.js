import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Tags from '../tags'
import Tag from '../tag'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Tags
      tags={props.tags}
    />
  )
}

describe('Tags', () => {

  it('should render the list of tags from a string', () => {
    const contains = containsElement(
      sut({
        tags: `hello,world`,
      }),
      <div data-component="tags">
        <Tag
          key={`hello`}
          title={`hello`}
        />
        <Tag
          key={`world`}
          title={`world`}
        />
      </div>
    )
    expect(contains).toBe(true)
  })

  it('should render nothing', () => {
    const contains = containsElement(
      sut({
      }),
      <span></span>
    )
    expect(contains).toBe(true)
  })

  it('should render the list of tags from an array', () => {
    const contains = containsElement(
      sut({
        tags: [`hello`, `world`],
      }),
      <div data-component="tags">
        <Tag
          key={`hello`}
          title={`hello`}
        />
        <Tag
          key={`world`}
          title={`world`}
        />
      </div>
    )
    expect(contains).toBe(true) 
  })

})
