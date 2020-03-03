import React from 'react'
import PostNavigationTeaser from '../postNavigationTeaser'
import { getSnapshot } from './_helpers'

describe(`Post navigation teaser`, () => {
  it(`should not render without previous post`, () => {
    const teaser = (
      <PostNavigationTeaser
        previous={{}}
      />
    )
    const tree = getSnapshot(teaser)
    expect(tree).toMatchSnapshot()
  })

  it(`should not render without a next post`, () => {
    const teaser = (
      <PostNavigationTeaser
        next={{}}
      />
    )
    const tree = getSnapshot(teaser)
    expect(tree).toMatchSnapshot()
  })

  it(`should render`, () => {
    const previousDate = new Date(`2018-04-01T00:00:00Z`)
    const nextDate = new Date(`2019-04-01T00:00:00Z`)
    const previous = {
      slug: `/previous`,
      title: `Don't panic.`,
      excerpt: `Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous work providing information about every planet in the universe—from the Earth just before it is destroyed by the alien Vogons.`,
      limitExcerpt: 10,
      date: { previousDate },
      author: `Pixie`,
      ttr: 1,
      tags: `douglas,adams,novel`,
    }
    const next = {
      slug: `/next`,
      title: `Come to the dark side.`,
      excerpt: `Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`,
      limitExcerpt: 10,
      date: { nextDate },
      author: `Elby`,
      ttr: 2,
      tags: `star,wars`,
    }
    const teaser = (
      <PostNavigationTeaser
        previous={previous}
        next={next}
      />
    )
    const tree = getSnapshot(teaser)
    expect(tree).toMatchSnapshot()
  })
})
