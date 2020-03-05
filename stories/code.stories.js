import React from 'react'
import { storiesOf } from '@storybook/react'
import Page from './_helpers'

storiesOf('Code', module)
  .add('inline', () =>
    <Page className="page">
      <p>Inline <code>code</code> block.</p>
    </Page>
  )
  .add('inline #bash', () =>
    <Page className="page">
      <p><code className="language-bash">npm run develop</code></p>
    </Page>
  )
  .add('block #javascript', () =>
    <Page className="page">
      <pre>
        <code className="language-javascript">
          const x = "something x related"
          const y = 2
          console.log(x + y) // &lt;-- don't do this!
        </code>
      </pre>
    </Page>
  )
  .add('block #clojure', () =>
    <Page className="page">
      <pre>
        <code className="language-clojure">
          (let [greeting "hello"
              name "Clarice"]
              (println (str greeting " " name)))
        </code>
      </pre>
    </Page>
  )
  .add('integrated', () =>
    <Page className="page">
      <p>Inline <code>code</code> block.</p>
      <p><code className="language-bash">npm run develop</code></p>
      <pre>
        <code className="language-javascript">
          const x = "something x related"
          const y = 2
          console.log(x + y) // &lt;-- don't do this!
        </code>
      </pre>
      <pre>
        <code className="language-clojure">
          (let [greeting "hello"
              name "Clarice"]
              (println (str greeting " " name)))
        </code>
      </pre>
    </Page>
  )