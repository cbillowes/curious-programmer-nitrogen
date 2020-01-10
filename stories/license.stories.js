import React from 'react'
import { storiesOf } from '@storybook/react'
import License from '../src/components/license'
import '../src/components/layout.css'

storiesOf('License', module)
  .add('default', () => <License />)
