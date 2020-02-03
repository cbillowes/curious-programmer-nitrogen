import React from 'react'
import { storiesOf } from '@storybook/react'
import ShowMore from '../src/components/showMore'
import '../src/components/layout.css'

storiesOf('Show More', module)
  .add('default', () => <ShowMore />)
