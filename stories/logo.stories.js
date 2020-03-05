import React from 'react'
import { storiesOf } from '@storybook/react'
import Logo from '../src/components/logo'

storiesOf('Logo', module)
  .add('standalone', () => <Logo />)
