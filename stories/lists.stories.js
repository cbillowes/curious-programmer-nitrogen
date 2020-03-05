import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from './_helpers'

storiesOf('Lists', module)
  .add('unordered', () =>
    <Page className="page">
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Duis a arcu ac felis elementum iaculis.</li>
        <li>Nam id consequat elit</li>
      </ul>
    </Page>
  )
  .add('ordered', () =>
    <Page className="page">
      <ol>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Duis a arcu ac felis elementum iaculis.</li>
        <li>Nam volutpat purus nec vehicula aliquam</li>
      </ol>
    </Page>
  )