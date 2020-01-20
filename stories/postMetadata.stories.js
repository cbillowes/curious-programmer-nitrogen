import React from 'react'
import { storiesOf } from '@storybook/react'
import PostMetadata from '../src/components/postMetadata'
import '../src/components/layout.css'

storiesOf('Post', module)
  .add('metadata', () => 
    <PostMetadata 
      moment="5 days ago" 
      date="1 April 2019"
      author="Clarice Bouwer"
      ttr="15" 
    />)
