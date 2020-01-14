import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { containsElement } from './helpers'
import Posts from '../posts'
import Post from '../post'
import Lang from '../../../gatsby-lang'

Enzyme.configure({ adapter: new Adapter() })

function sut(props) {
  return (
    <Posts 
      edges={props.edges}
    />
  )
}

describe('Posts', () => {

  it('should render no posts available message when edges are not defined', () => {
    const contains = containsElement(
      <Posts />,
      <div>{Lang.noPostsAvailable}</div>
    )
    expect(contains).toBe(true)
  })

  it('should render no posts available message when there are no edges available', () => {
    const contains = containsElement(
      sut({
        edges: [],
      }),
      <div>{Lang.noPostsAvailable}</div>
    )
    expect(contains).toBe(true)
  })


  it('should render a post', () => {
    const node = {
      fields: {
        slug: `/blog/i-am-a-post`,
      },
      frontmatter: {
        title: `I am a post`,
        tags: [`hello world`, `greetings from earth`],
        author: `Clarice Bouwer`,
        date: new Date(1, 1, 2020),
      },
      timeToRead: 15,
      excerpt: `I have something awesome to share with you.`,
    }
    const contains = containsElement(
      sut({
        edges: [{node: node}]
      }),
      <Post
        summary="true"
        title={node.frontmatter.title}
        slug={node.fields.slug}
        tags={node.frontmatter.tags.join(`,`)}
        date={node.frontmatter.date}
        author={node.frontmatter.author}
        ttr={node.timeToRead}
      >
        {node.excerpt}
      </Post>
    )
    expect(contains).toBe(true)
  })

})
