import React from 'react'
import Tags, { getTagsFromEdges } from '../tags'
import { getSnapshot } from './_helpers'

describe(`Tags`, () => {
  it(`should render from list`, () => {
    const component = (
      <Tags
        tags={[`hello`, `world`]}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should convert data from edges to a collection of tags`, () => {
    const edges = [
      {
        node: {
          frontmatter: {
            tags: [`don't`, `panic`],
          },
        },
      },
      {
        node: {
          frontmatter: {
            tags: [`bring`, `your`, `towel`],
          },
        },
      },
      {
        node: {
          frontmatter: {
            tags: [`don't`, `panic`],
          },
        },
      },
      {
        node: {
          frontmatter: {
            tags: [`bring`, `your`, `towel`],
          },
        },
      },
    ]
    const component = getTagsFromEdges(edges)
    expect(component).toStrictEqual(
      [
        [`don't`, `panic`],
        [`bring`, `your`, `towel`],
        [`don't`, `panic`],
        [`bring`, `your`, `towel`],
      ])
  })
})
