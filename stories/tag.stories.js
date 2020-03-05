import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../src/components/tag'
import Page from './_helpers'

storiesOf('Tag', module)
  .add('title only', () =>
    <Page className="page">
      <Tag
        title="Important"
      />
    </Page>
  )
  .add('click on title', () =>
    <Page className="page">
      <Tag
        to="/important"
        title="Important"
      />
    </Page>
  )
  .add('internal link', () =>
    <Page className="page">
      <Tag
        to="/tag/technical"
        title="Technical"
      >
        Technical
      </Tag>
    </Page>
  )
  .add('external link', () =>
    <Page className="page">
      <Tag
        to="https://www.google.com"
        title="Google"
      >
        A super fast and popular search engine.
      </Tag>
    </Page>
  )
  .add('disabled', () =>
    <Page className="page">
      <Tag
        to="https://www.google.com"
        title="Google"
        disabled={true}
      >
        A super fast and popular search engine.
      </Tag>
    </Page>
  )
  .add('snippet', () =>
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
