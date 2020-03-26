import React from 'react'
import PostPage from '../pages/post'
import { getSnapshot } from './_helpers'

describe(`Post page`, () => {
  it(`should render`, () => {
    const post = {
      "html": "<p>This is a post.</p>",
      "excerpt": "This is an excerpt.",
      "timeToRead": 1,
      "fields": {
        "number": 102,
        "slug": "/blog/advanced-git-commands",
        "date": "2019-09-11 02:00:00 +0200"
      },
      "frontmatter": {
        "title": "Advanced Git commands",
        "tags": [
          "Technical",
          "Commands",
          "Git",
          "Advanced"
        ],
        "author": "Clarice Bouwer",
      }
    }
    const component = (
      <PostPage
        slug="/blog/template"
        title="Don't Panic."
        date="2019-02-01T00:00:00.000Z"
        tags={["display", "example", "post"]}
        excerpt="This is an example of what this page will look like."
        timeToRead={42}
        author="Clarice Bouwer"
        html="<p>Hello world.</p>"
        number={42}
        next={post}
        previous={post}
      />
    )
    const tree = getSnapshot(component)
    expect(tree).toMatchSnapshot()
  })
})
