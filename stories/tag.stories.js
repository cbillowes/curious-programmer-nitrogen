import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tag } from '../src/components/tag'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('simple tag', () => <Tag title="hello world" />)
  .add('force tag to lowercase', () => <Tag title="HELLO galaxy" />)
  .add('with custom slug', () => <Tag title="custom slug" slug="/go/to/custom/url" />)
  .add('no link', () => <Tag title="hello universe" readonly={true} />)
  .add('disabled', () => <Tag title="hello multiverse" disabled={true} />)
