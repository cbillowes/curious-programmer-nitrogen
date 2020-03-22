import React from 'react'
import { storiesOf } from '@storybook/react'
import IndexPage from '../src/components/pages/index'
import ArchivesPage from '../src/components/pages/archives'
import PageNotFound from '../src/components/pages/404'
import TagsPage from '../src/components/pages/tags'

const edges = [
  {
    "node": {
      "excerpt": "",
      "timeToRead": 1,
      "fields": {
        "number": 102,
        "slug": "/blog/advanced-git-commands",
        "date": "2019-09-11 02:00:00 +0200"
      },
      "frontmatter": {
        "title": "Advanced Git commands",
        "tags": [
          "Technical",
          "Commands",
          "Git",
          "Advanced"
        ],
        "author": null,
        "blurb": null
      }
    }
  },
  {
    "node": {
      "excerpt": "Are you a beginner programmer? Perhaps you have some experience and haven't\nheard of or understood some popular terms. The goal of this post is to\nexpose and unravel common programming jargon by sharing my understanding of it.\nIt is super-duper…",
      "timeToRead": 4,
      "fields": {
        "number": 101,
        "slug": "/blog/programing-jargon",
        "date": "2019-09-10 02:00:00 +0200"
      },
      "frontmatter": {
        "title": "Programing jargon",
        "tags": [
          "Technical",
          "Beginner",
          "Programmer",
          "Experience"
        ],
        "author": null,
        "blurb": null
      }
    }
  },
  {
    "node": {
      "excerpt": "You can create Git aliases for long or repetitive commands which map to short cuts.\nThis can make your workflow more efficient as it decreases the number of keystrokes involved. You create your alias using the Git config command which updates the Git…",
      "timeToRead": 1,
      "fields": {
        "number": 100,
        "slug": "/blog/git-aliases",
        "date": "2019-09-02 03:00:00 +0200"
      },
      "frontmatter": {
        "title": "Git aliases",
        "tags": [
          "Technical",
          "Git",
          "Alias",
          "Short cuts",
          "Workflow"
        ],
        "author": null,
        "blurb": null
      }
    }
  }
]

storiesOf('Layout/pages', module)
  .add('blog', () =>
    <IndexPage
      edges={edges}
    />
  )
  .add('archive', () =>
    <ArchivesPage
      edges={edges}
    />
  )
  .add('404', () =>
    <PageNotFound
      edges={edges}
    />
  )
  .add('tags', () =>
    <TagsPage
      edges={edges}
    />
  )
