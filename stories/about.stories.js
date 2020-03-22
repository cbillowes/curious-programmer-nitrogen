import React from 'react'
import { storiesOf } from '@storybook/react'
import AboutPage from '../src/components/pages/about'

const profileImage = {
  "data": {
    "images": {
      "edges": [
        {
          "node": {
            "extension": "jpg",
            "relativePath": "profile.jpg",
            "childImageSharp": {
              "fluid": {
              }
            }
          }
        }
      ]
    }
  }
}

storiesOf('Layout/pages', module)
  .add('about', () =>
    <AboutPage
      profileImage={profileImage}
    />
  )
