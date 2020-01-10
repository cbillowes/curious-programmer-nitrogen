import React from 'react'
import { storiesOf } from '@storybook/react'
import Contact from '../src/components/contact'
import '../src/components/layout.css'

storiesOf('Contact', module)
  .add('default', () => 
    <Contact />
  )