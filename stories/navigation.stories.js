import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuItems from '../src/components/menuItems'
import '../src/components/layout.css'

storiesOf('MenuItems', module)
  .add('rendered', () => <MenuItems />)
