import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from '../src/components/footer'
import '../src/components/layout.css'

storiesOf('Footer', module)
  .add('main', () => 
    <Footer />
  )
