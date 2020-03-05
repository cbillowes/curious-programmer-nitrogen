import React from 'react'
import { storiesOf } from '@storybook/react'
import Search from '../src/components/search'

storiesOf('Search', module)
  .add('default', () => <Search />)
  .add('active', () => <Search isOpen={true} />)
