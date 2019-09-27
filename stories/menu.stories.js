import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from '../src/components/menu'
import '../src/components/layout.css'

storiesOf('Menu', module)
  .add('default', () => <Menu />)
  .add('active', () => <Menu className="active" />)
