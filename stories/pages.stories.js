import React from 'react'
import { storiesOf } from '@storybook/react'
import IndexPage from '../src/components/pages'
import AboutPage from '../src/components/pages/about'
import ArchivesPage from '../src/components/pages/archives'
import TagsPage from '../src/components/pages/tags'
import CreditsPage from '../src/components/pages/credits'
import PrivacyPolicyPage from '../src/components/pages/privacy-policy'
import LicensePage from '../src/components/pages/license'

storiesOf('Layout/pages', module)
  .add('blog', () =>
    <IndexPage />
  )
  .add('about', () =>
    <AboutPage />
  )
  .add('archived', () =>
    <ArchivesPage />
  )
  .add('tags', () =>
    <TagsPage />
  )
  .add('credits', () =>
    <CreditsPage />
  )
  .add('privacy policy', () =>
    <PrivacyPolicyPage />
  )
  .add('license', () =>
    <LicensePage />
  )
