import React from 'react'
import { storiesOf } from '@storybook/react'
import Anchor from '../src/components/anchor'
import '../src/components/layout.css'

storiesOf('Link', module)
  .add('external (styled)', () => 
    <Anchor 
      to="https://google.com" 
      title="Google"
    >
      Google
    </Anchor>
  )
  .add('external (unstyled)', () => 
    <Anchor
      to="https://google.com"
      title="Google"
      bland="true"
    >
      Google
    </Anchor>
  )
  .add('tag', () => 
    <Anchor
      to="https://google.com"
      title="Google"
      tag="true"
    >
      Google
    </Anchor>
  )
  .add('internal', () => 
    <Anchor 
      to="/blog"
      title="Blog page"
    >
      Blog page
    </Anchor>
  )