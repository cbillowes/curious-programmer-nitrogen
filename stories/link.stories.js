import React from 'react'
import { storiesOf } from '@storybook/react'
import { InternalLink, BlandExternalLink, PrettyExternalLink } from '../src/components/link'
import '../src/components/layout.css'

storiesOf('Link', module)
  .add('bland', () => <BlandExternalLink to="https://www.google.com">Google</BlandExternalLink>)
  .add('pretty', () => <PrettyExternalLink to="https://www.google.com">Google</PrettyExternalLink>)
  .add('internal', () => <InternalLink to="/blog">Blog</InternalLink>)
