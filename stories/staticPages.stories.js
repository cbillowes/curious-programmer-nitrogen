import React from 'react'
import { storiesOf } from '@storybook/react'
import CreditsPage from '../src/components/pages/credits'
import PrivacyPolicyPage from '../src/components/pages/privacy-policy'
import LicensePage from '../src/components/pages/license'

storiesOf('Layout/pages', module)
  .add('credits', () =>
    <CreditsPage />
  )
  .add('privacy policy', () =>
    <PrivacyPolicyPage />
  )
  .add('license', () =>
    <LicensePage />
  )
