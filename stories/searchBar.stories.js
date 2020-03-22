import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchBar from '../src/components/searchBar'

const Results = [
  { to: '/', text: 'go to the home page' },
  { to: '/tags', text: 'go to the tags page' },
]

const Tags = [
  { tag: 'Hello World' },
  { tag: 'Hello Galaxy' },
  { tag: 'Somewhere special', slug: '/somewhere/special' }
]

storiesOf('Components/search bar', module)
  .add('default', () => <SearchBar isOpen={false} results={[]} />)
  .add('active', () => <SearchBar isOpen={true} results={[]} />)
  .add('with results', () => <SearchBar isOpen={true} results={Results} />)
  .add('with tags', () => <SearchBar isOpen={true} tags={Tags} />)
  .add('full search results', () => <SearchBar isOpen={true} results={Results} tags={Tags} />)
