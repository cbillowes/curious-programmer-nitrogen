import React from 'react'
import { storiesOf } from '@storybook/react'
import Tag from '../src/components/tag'
import '../src/components/layout.css'

storiesOf('Tags', module)
  .add('default', () => <Tag tag="hello world" slug="hello-world" />)
  .add('to lowercase', () => <Tag tag="HELLO galaxy" slug="hello-galaxy" />)
  .add('no link', () => <Tag tag="hello universe" />)
  .add('disabled', () => <Tag tag="hello multiverse" disabled='true' />)
