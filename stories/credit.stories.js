import React from 'react'
import { storiesOf } from '@storybook/react'
import Credit from '../src/components/credit'
import Page from './_helpers'

storiesOf('Credit', module)
  .add('no click-through', () =>
    <Credit
      title="Important"
    >
      This is a super duper important credit but does not link to any resource.
    </Credit>
  )
  .add('click-through', () =>
    <Credit
      to="https://www.google.com"
      title="Google"
    >
      A super fast and popular search engine.
    </Credit>
  )
  .add('layout', () =>
    <Page>
      <Credit
        title="Important"
      >
        This is a super duper important credit but does not link to any resource.
      </Credit>

      <Credit
        to="https://www.google.com"
        title="Google"
      >
        A super fast and popular search engine.
      </Credit>
    </Page>
  )
