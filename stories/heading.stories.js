import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4 } from '../src/components/heading'
import '../src/components/layout.css'

storiesOf('Headings', module)
  .add('h1', () => <H1>The glorious most used greeting of Hello World</H1>)
  .add('h2', () => <H2>The second glorious most used greeting of Hello World</H2>)
  .add('h3', () => <H3>The third glorious most used greeting of Hello World</H3>)
  .add('h4', () => <H4>The fourth glorious most used greeting of Hello World</H4>)
