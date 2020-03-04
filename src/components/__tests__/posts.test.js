import React from 'react'
import Posts from '../posts'
import { getSnapshot } from './_helpers'

describe(`Posts`, () => {
  const edges = [
    {
      node: {
        excerpt: ``,
        timeToRead: 1,
        html: `,`,
        fields: {
          slug: `/dont-panic`,
          date: new Date(""),
          number: 42,
        },
        frontmatter: {
          title: ``,
          tags: [],
          author: `Clarice Bouwer`,
          blurb: ``,
        }
      }
    }
  ]

  it(`should render with default word limit`, () => {
    const posts = (
      <Posts
        edges={edges}
      />
    )
    const tree = getSnapshot(posts)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with specified word limit of 5`, () => {
    const posts = (
      <Posts
        edges={edges}
        limit={5}
      />
    )
    const tree = getSnapshot(posts)
    expect(tree).toMatchSnapshot()
  })
})
