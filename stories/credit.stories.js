import React from 'react'
import { storiesOf } from '@storybook/react'
import Credit from '../src/components/credit'
import '../src/components/layout.css'

storiesOf('Credit', module)
  .add('with tag', () => <Credit title="Netlify" slug="">An awesome hosting platform.</Credit>)
  .add('with link', () => <Credit slug="https://www.google.com" title="Google">A super fast and popular search engine.</Credit>)
