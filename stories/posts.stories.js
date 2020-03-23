import React from 'react'
import { storiesOf } from '@storybook/react'
import Posts from '../src/components/posts'

const edges = [
  {
    node: {
      fields: {
        slug: `/blog/blog-post-one`,
      },
      frontmatter: {
        title: `Blog Post One`,
        tags: [`blog`, `tag`, `one`],
        author: `Clarice Bouwer`,
        date: new Date(2019, 1, 20),
      },
      timeToRead: 15,
      excerpt: `
        A few words from the hitchhiker's guide to the galaxy.
        I love deadlines. I like the whooshing sound they make as they fly by.
        In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.
        The ships hung in the sky in much the same way that bricks don't.
      `,
    },
  },
  {
    node: {
      fields: {
        slug: `/blog/blog-post-two`,
      },
      frontmatter: {
        title: `Blog Post Two`,
        tags: [`blog`, `tag`, `two`],
        author: `Douglas Adams`,
        date: new Date(),
      },
      timeToRead: 15,
      excerpt: `
        “Do. Or do not. There is no try.” – Yoda. “Somebody has to save our skins.” – Leia Organa.
        “In my experience there is no such thing as luck.” – Obi-Wan Kenobi.
        “I’ve got a bad feeling about this.” – basically everyone.
        “Your eyes can deceive you. Don’t trust them.” – Obi-Wan Kenobi
        "I find your lack of faith disturbing." – Darth Vader
      `,
    },
  },
]

storiesOf('Components/post', module)
  .add('listing', () =>
    <Posts
      edges={edges}
      showNumbers={true}
    />
  )
