import React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../src/components/tags'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('listing', () =>
    <Tags
      tags="hello,world,how,are,you"
    />
  )
