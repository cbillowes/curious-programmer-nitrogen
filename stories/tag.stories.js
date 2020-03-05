import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../src/components/tag'
import Page from './_helpers'

storiesOf('Tag', module)
  .add('title only', () =>
    <Tag
      title="Important"
    />
  )
  .add('click on title', () =>
    <Tag
      to="/important"
      title="Important"
    />
  )
  .add('internal link', () =>
    <Tag
      to="/tag/technical"
      title="Technical"
    >
      Technical
    </Tag>
  )
  .add('external link', () =>
    <Tag
      to="https://www.google.com"
      title="Google"
    >
      A super fast and popular search engine.
    </Tag>
  )
  .add('disabled', () =>
    <Tag
      to="https://www.google.com"
      title="Google"
      disabled={true}
    >
      A super fast and popular search engine.
    </Tag>
  )
  .add('layout', () =>
    <Page>
      <strong>All the types of tags in one bunch:</strong><br />
      <Tag
        title="Important"
      />
      <Tag
        to="/important"
        title="Important"
      />
      <Tag
        to="/tag/technical"
        title="Technical"
      >
        Technical
      </Tag>
      <Tag
        to="https://www.google.com"
        title="Google"
      >
        A super fast and popular search engine.
      </Tag>
      <Tag
        to="https://www.google.com"
        title="Google"
        disabled={true}
      >
        A super fast and popular search engine.
      </Tag>
    </Page>
  )
