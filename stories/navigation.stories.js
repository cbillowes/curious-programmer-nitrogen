import React from 'react'
import { storiesOf } from '@storybook/react'
import Navigation from '../src/components/navigation'

storiesOf('Navigation', module)
  .add('opened', () => <Navigation isOpen={true} />)
  .add('closed', () => <Navigation isOpen={false} />)
  .add('pathname: /', () => <Navigation isOpen={true} path="/" />)
  .add('pathname: /blog', () => <Navigation isOpen={true} path="/blog" />)
  .add('pathname: /about', () => <Navigation isOpen={true} path="/about" />)
  .add('pathname: /archives', () => <Navigation isOpen={true} path="/archives" />)
  .add('pathname: /tags', () => <Navigation isOpen={true} path="/tags" />)
  .add('pathname: /credits', () => <Navigation isOpen={true} path="/credits" />)
  .add('pathname: /privacy-policy', () => <Navigation isOpen={true} path="/privacy-policy" />)
  .add('pathname: /license', () => <Navigation isOpen={true} path="/license" />)
