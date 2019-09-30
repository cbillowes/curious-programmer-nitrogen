import React from 'react'
import { storiesOf } from '@storybook/react'
import Navigation from '../src/components/navigation'
import '../src/components/layout.css'

storiesOf('Navigation', module)
  .add('default', () => <Navigation />)
  .add('active:blog', () => <Navigation path="/blog" />)
  .add('active:about', () => <Navigation path="/about" />)
  .add('active:archives', () => <Navigation path="/archives" />)
  .add('active:tags', () => <Navigation path="/tags" />)
  .add('active:credits', () => <Navigation path="/credits" />)
  .add('active:privacy policy', () => <Navigation path="/privacy-policy" />)
  .add('active:license', () => <Navigation path="/license" />)
