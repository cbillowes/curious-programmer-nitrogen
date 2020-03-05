import React from 'react'
import { storiesOf } from '@storybook/react'
import Credit from '../src/components/credit'

storiesOf('Credit', module)
  .add('simple', () =>
    <Credit
      title="Important"
    >
      This is a super duper important credit but does not link to any resource.
    </Credit>
  )
  .add('has resource', () =>
    <Credit
      to="https://www.google.com"
      title="Google"
    >
      A super fast and popular search engine.
    </Credit>
  )
  .add('no click-through', () =>
    <Credit
      title="Stop!"
      readonly="true"
    >
      Don't take me anywhere.
    </Credit>
  )
