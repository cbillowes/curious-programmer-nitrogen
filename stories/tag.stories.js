import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../src/components/tag'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('simple tag', () => <Tag tag="hello world" />)
  .add('force tag to lowercase', () => <Tag tag="HELLO galaxy" />)
  .add('with custom slug', () => <Tag tag="custom slug" slug="/go/to/custom/url" />)
  .add('no link', () => <Tag tag="hello universe" readonly={true} />)
  .add('disabled', () => <Tag tag="hello multiverse" disabled={true} />)
