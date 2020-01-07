import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExternalLink, StyledExternalLink } from '../src/components/link'
import '../src/components/layout.css'

storiesOf('Link', module)
  .add('default', () => <ExternalLink to="https://www.google.com">Google</ExternalLink>)
  .add('styled', () => <StyledExternalLink to="https://www.google.com">Google</StyledExternalLink>)
