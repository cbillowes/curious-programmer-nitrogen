import React from 'react'
import { storiesOf } from '@storybook/react'
import Credit from '../src/components/credit'
import '../src/components/layout.css'

storiesOf('Credit', module)
  .add('external resource', () => <Credit to="https://www.google.com" title="Google">A super fast and popular search engine.</Credit>)
