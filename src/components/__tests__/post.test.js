import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement, containsValue } from './helpers'
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

  it('should render the body from html tags', () => {
    const contains = containsElement(
      sut({
        slug: `/`,
        children:
          <div>
            <p>I like the <strong>whooshing</strong> sound they make as they fly by.</p>
            <p>This must be Thursday, said Arthur to himself, sinking low over his beer.</p>
            <p><em>Time is an illusion. Lunchtime doubly so.</em></p>
          </div>,
      }),
      <div>
        <p>I like the <strong>whooshing</strong> sound they make as they fly by.</p>
        <p>This must be Thursday, said Arthur to himself, sinking low over his beer.</p>
        <p><em>Time is an illusion. Lunchtime doubly so.</em></p>
      </div>
    )
    expect(contains).toBe(true)
  })

  it('should render the body from text', () => {
    const contains = containsValue(
      sut({
        slug: `/`,
        children:
          `<div><p>Time is an illusion. <strong>Lunchtime doubly so.</strong></p></div>`,
      }),
      `<div><p>Time is an illusion. <strong>Lunchtime doubly so.</strong></p></div>`
    )
    expect(contains).toBe(true)
  })

})
