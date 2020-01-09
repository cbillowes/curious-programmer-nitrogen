import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../src/components/tag'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('cannot click', () => 
    <Tag
      title="Hello World"
      readonly="true"
    />
  )
  .add('disabled', () =>
    <Tag
      title="Hello World"
      disabled="true"
    />
  )
  .add('external resource', () =>
    <Tag
      title="Google"
      to="https://www.google.com"
    />
  )
  .add('internal resource', () => 
    <Tag
      title="Blog"
      to="/blog"
    />
  )
  .add('no slug', () => 
    <Tag 
      title="Productivity Tools"
    />
  )
