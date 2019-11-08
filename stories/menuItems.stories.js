import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuItems from '../src/components/menuItems'
import '../src/components/layout.css'

storiesOf('MenuItems', module)
  .add('default', () => <MenuItems />)
  .add('active:blog', () => <MenuItems path="/blog" />)
  .add('active:about', () => <MenuItems path="/about" />)
  .add('active:archives', () => <MenuItems path="/archives" />)
  .add('active:tags', () => <MenuItems path="/tags" />)
  .add('active:credits', () => <MenuItems path="/credits" />)
  .add('active:privacy policy', () => <MenuItems path="/privacy-policy" />)
  .add('active:license', () => <MenuItems path="/license" />)
