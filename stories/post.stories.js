import React from 'react'
import { storiesOf } from '@storybook/react'
import Post from '../src/components/post'
import '../src/components/layout.css'

const metadata = {
  moment: `a year ago`,
  date: `1 April 2019`,
  author: `Clarice Bouwer`,
  ttr: `15`
}

const tags = [
  {
    name: `hello`,
    slug: `/hello`,
  },
  {
    name: `world`,
    slug: `/world`
  }
]

storiesOf('Post', module)
  .add('default', () => 
    <Post 
      title="Hello World"
      metadata={metadata}
      tags={tags}
      post="Lorem ipsum." 
    />)
