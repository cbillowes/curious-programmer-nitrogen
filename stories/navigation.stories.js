import React from 'react'
import { storiesOf } from '@storybook/react'
import Navigation from '../src/components/navigation'
import '../src/components/layout.css'

storiesOf('Navigation', module)
  .add('open', () => <Navigation open="true" />)
  .add('closed', () => <Navigation open="false" />)
