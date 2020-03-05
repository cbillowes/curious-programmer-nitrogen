import React from 'react'
import { storiesOf } from '@storybook/react'
import Contact from '../src/components/contact'

storiesOf('Contact', module)
  .add('default', () =>
    <Contact />
  )