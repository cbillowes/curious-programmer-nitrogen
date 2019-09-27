import React from 'react'
import { storiesOf } from '@storybook/react'
import H1 from '../src/components/h1'
import H2 from '../src/components/h2'
import H3 from '../src/components/h3'
import H4 from '../src/components/h4'
import '../src/components/layout.css'

storiesOf('Headings', module)
  .add('h1', () => <H1 title="The glorious most used greeting of Hello World" />)
  .add('h2', () => <H2 title="The second glorious most used greeting of Hello World" />)
  .add('h3', () => <H3 title="The third glorious most used greeting of Hello World" />)
  .add('h4', () => <H4 title="The fourth glorious most used greeting of Hello World" />)
