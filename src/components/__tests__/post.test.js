import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Post from '../post'
import { H1 } from '../heading'
import PostMetadata from '../postMetadata'
import { Tag } from '../tag'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Post 
      title={props.title}
      metadata={props.metadata}
      tags={props.tags}
      post={props.post}
    >
      {props.children}
    </Post>
  )
}

describe('Post', () => {

  it('should render the title', () => {
    const contains = containsElement(
      sut({
        title: `Hello world`,
      }),
      <H1 title="Hello world" />
    )
    expect(contains).toBe(true)
  })

  it('should render post metadata', () => {
    const contains = containsElement(
      sut({
        metadata: {
          moment: `a year ago`,
          date: `1 April 2019`,
          author: `Clarice Bouwer`,
          ttr: `15`,
        }
      }),
      <PostMetadata 
        moment="a year ago"
        date="1 April 2019"
        author="Clarice Bouwer"
        ttr="15"
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the tags', () => {
    const contains = containsElement(
      sut({
        tags: [
          {
            name: `hello`,
            slug: `/hello`,
          },
          {
            name: `world`,
            slug: `/world`,
          },
        ]
      }),
      <div>
        <Tag title="hello" slug="/hello" />
        <Tag title="world" slug="/world" />
      </div>
    )
    expect(contains).toBe(true)
  })

  it('should render the body', () => {
    const contains = containsElement(
      sut({
        children: `Lorem ipsum.`,
      }),
      <div>
        Lorem ipsum.
      </div>
    )
    expect(contains).toBe(true)
  })

})
