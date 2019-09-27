import React from 'react'
import { storiesOf } from '@storybook/react'
import Logo from '../src/components/logo'
import '../src/components/layout.css'

storiesOf('Logo', module)
  .add('default', () => <Logo />)
