import React from 'react'
import { storiesOf } from '@storybook/react'
import Navigation from '../src/components/navigation'
import '../src/components/layout.css'

storiesOf('Navigation', module)
  .add('opened', () => <Navigation open={true} />)
  .add('closed', () => <Navigation open={false} />)
  .add('pathname: /', () => <Navigation open={true} path="/" />)
  .add('pathname: /blog', () => <Navigation open={true} path="/blog" />)
  .add('pathname: /about', () => <Navigation open={true} path="/about" />)
  .add('pathname: /archives', () => <Navigation open={true} path="/archives" />)
  .add('pathname: /tags', () => <Navigation open={true} path="/tags" />)
  .add('pathname: /credits', () => <Navigation open={true} path="/credits" />)
  .add('pathname: /privacy-policy', () => <Navigation open={true} path="/privacy-policy" />)
  .add('pathname: /license', () => <Navigation open={true} path="/license" />)
