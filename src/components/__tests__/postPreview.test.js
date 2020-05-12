import React from "react"
import PostPreview from "../postPreview"
import { getSnapshot } from "./_helpers"

it(`should render the full blurb`, () => {
  const edge = {
    timeToRead: 42,
    fields: {
      slug: `/dont-panic`,
      date: `2019-02-01T00:00:00.000Z`,
      number: 2,
    },
    frontmatter: {
      title: `Don't panic.`,
      tags: [`don't`, `panic`],
    },
  }
  const component = (
    <PostPreview edge={edge}>
      <p>
        Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
        researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous
        work providing information about every planet in the universe—from the
        Earth just before it is destroyed by the alien Vogons.
      </p>
    </PostPreview>
  )
  const tree = getSnapshot(component)
  expect(tree).toMatchSnapshot()
})

it(`should limit the blurb word count`, () => {
  const edge = {
    timeToRead: 42,
    fields: {
      slug: `/dont-panic`,
      date: `2019-02-01T00:00:00.000Z`,
      number: 2,
    },
    frontmatter: {
      title: `Don't panic.`,
      tags: [`don't`, `panic`],
    },
  }
  const component = (
    <PostPreview wordLimit={42} edge={edge}>
      <p>
        Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
        researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous
        work providing information about every planet in the universe—from the
        Earth just before it is destroyed by the alien Vogons.
      </p>
    </PostPreview>
  )
  const tree = getSnapshot(component)
  expect(tree).toMatchSnapshot()
})

it(`should credit a photo`, () => {
  const edge = {
    timeToRead: 42,
    fields: {
      slug: `/dont-panic`,
      date: `2019-02-01T00:00:00.000Z`,
      number: 2,
    },
    frontmatter: {
      title: `Don't panic.`,
      tags: [`don't`, `panic`],
    },
  }
  const component = (
    <PostPreview edge={edge} wordLimit={1}>
      <p>
        Earthman Arthur Dent is rescued by his friend, Ford Prefect—an alien
        researcher for the titular Hitchhiker's Guide to the Galaxy, an enormous
        work providing information about every planet in the universe—from the
        Earth just before it is destroyed by the alien Vogons.
      </p>
    </PostPreview>
  )
  const tree = getSnapshot(component)
  expect(tree).toMatchSnapshot()
})
