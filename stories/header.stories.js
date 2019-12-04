import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../src/components/header'
import '../src/components/layout.css'

storiesOf('Header', module)
  .add('default', () => <Header />)
  .add('with menu open', () => <Header isMenuOpen={ true } />)
  .add('with search open', () => <Header isSearchOpen={ true } />)
