import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/components/header'
import '../src/components/layout.css'

storiesOf('Header', module)
  .add('default', () => <Header />)
