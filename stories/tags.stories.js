import React from 'react'
import { storiesOf } from '@storybook/react'
import Tags from '../src/components/tags'

storiesOf('Tags', module)
  .add('comma separated', () =>
    <Tags
      tags="hello,world,how,are,you"
    />
  )
  .add('array', () =>
    <Tags
      tags={["hello", "world", "how", "are", "you"]}
    />
  )
