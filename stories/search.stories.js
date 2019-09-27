import React from 'react'
import { storiesOf } from '@storybook/react'
import Search from '../src/components/search'
import '../src/components/layout.css'

storiesOf('Search', module)
  .add('default', () => <Search />)
  .add('active', () => <Search className="active" />)
