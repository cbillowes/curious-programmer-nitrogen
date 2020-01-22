import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Post from '../post'
import { H1 } from '../heading'
import Anchor from '../anchor'
import PostMetadata from '../postMetadata'
import Tags from '../tags'
import Constants from '../../../gatsby-data'

const colors = Constants.theme.colors;

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  const { date, author, ttr } = props.metadata || {}
  return (
    <Post 
      title={props.title}
      slug={props.slug}
      tags={props.tags}
      date={date}
      author={author}
      ttr={ttr}
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
        slug: `/blog/hello-world`,
      }),
      <H1>
        <Anchor
          to="/blog/hello-world"
          title="Hello world"
          bland={true}
          style={{
            color: `${colors.light}`,
            textDecoration: `none`,
            borderBottom: `solid 1px ${colors.light}`,
          }}
        >
          Hello world
        </Anchor>
      </H1>
    )
    expect(contains).toBe(true)
  })

  it('should render post metadata', () => {
    const contains = containsElement(
      sut({
        slug: `/`,
        metadata: {
          date: `1 April 2019`,
          author: `Douglas Adams`,
          ttr: `15`,
        }
      }),
      <PostMetadata 
        date="1 April 2019"
        author="Douglas Adams"
        ttr="15"
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the tags', () => {
    const contains = containsElement(
      sut({
        slug: `/`,
        tags: `hello,world,greetings` 
      }),
      <Tags
        tags={`hello,world,greetings`}
      />
    )
    expect(contains).toBe(true)
  })

  it('should render the body', () => {
    const contains = containsElement(
      sut({
        slug: `/`,
        children: `Lorem ipsum.`,
      }),
      <div>
        Lorem ipsum.
      </div>
    )
    expect(contains).toBe(true)
  })

})
