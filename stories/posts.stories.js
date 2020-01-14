import React from 'react'
import { storiesOf } from '@storybook/react'
import Posts from '../src/components/posts'
import '../src/components/layout.css'

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
        date: new Date(1, 1, 2020),
      },
      timeToRead: 15,
      excerpt: `Ye Pieces of Eight bilge rat hempen halter hardtack bilge sloop ballast boom heave to. `,
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
      excerpt: `Hands dance the hempen jig Spanish Main capstan Gold Road galleon ahoy fire in the hole long boat Plate Fleet.`,
    },
  },
]

storiesOf('Post', module)
  .add('listing', () => 
    <Posts
      edges={edges}
    />
  )
