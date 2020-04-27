import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/components/header'

storiesOf('Components/header', module)
  .add('as is', () => <Header />)
  .add('open menu', () => <Header isMenuOpen={true} />)
