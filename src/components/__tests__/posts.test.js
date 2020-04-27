import React from "react"
import Posts from "../posts"
import { getSnapshot } from "./_helpers"

describe(`Posts`, () => {
  const edges = [
    {
      node: {
        excerpt: ``,
        timeToRead: 42,
        html: `,`,
        fields: {
          slug: `/dont-panic`,
          date: `2019-02-01T00:00:00.000Z`,
          number: 42,
        },
        frontmatter: {
          title: ``,
          author: `Clarice Bouwer`,
          ttr: 42,
          tags: [`don't`, `panic`],
        },
      },
    },
    {
      node: {
        excerpt: ``,
        timeToRead: 42,
        html: `,`,
        fields: {
          slug: `/bring-your-own-towel`,
          date: `2019-02-01T00:00:00.000Z`,
          number: 42,
        },
        frontmatter: {
          title: ``,
          author: `Clarice Bouwer`,
          ttr: 42,
          tags: [`towel`, `panic`],
        },
      },
    },
  ]

  it(`should render with default word limit`, () => {
    const component = <Posts edges={edges} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render with specified word limit of 5`, () => {
    const component = <Posts edges={edges} limit={1} />
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
