import React from "react"
import PostNavigationTeaser from "../postNavigationTeaser"
import { getSnapshot } from "./_helpers"

describe(`Post navigation teaser`, () => {
  it(`should render all that is required`, () => {
    const component = (
      <PostNavigationTeaser
        previous={{
          slug: `/previous`,
          title: `Previous`,
          excerpt: `Excerpt`,
          date: `2018-04-01T00:00:00Z`,
          author: `Clarice Bouwer`,
          ttr: 42,
          tags: [`Douglas`, `Adams`],
        }}
        next={{
          slug: `/next`,
          title: `Next`,
          excerpt: `Excerpt`,
          date: `2018-04-01T00:00:00Z`,
          author: `Clarice Bouwer`,
          ttr: 42,
          tags: [`Douglas`, `Adams`],
        }}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })

  it(`should render everything else`, () => {
    const component = (
      <PostNavigationTeaser
        previous={{
          slug: `/previous`,
          title: `Don't panic.`,
          excerpt: `Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous work providing information about every planet in the universe—from the Earth just before it is destroyed by the alien Vogons.`,
          date: `2018-04-01T00:00:00Z`,
          author: `Pixie`,
          ttr: 42,
          wordLimit: 10,
          tags: [`Douglas`, `Adams`],
        }}
        next={{
          slug: `/next`,
          title: `Come to the dark side.`,
          excerpt: `Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`,
          date: `2019-04-01T00:00:00Z`,
          author: `Elby`,
          ttr: 42,
          wordLimit: 10,
          tags: [`star`, `wars`],
        }}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
