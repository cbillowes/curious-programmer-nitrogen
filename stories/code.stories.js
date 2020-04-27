import React from "react"
import { storiesOf } from "@storybook/react"
import Page from "./_helpers"

storiesOf("Typography/code", module)
  .add("inline", () => (
    <Page>
      <p>
        Inline <code>code</code> block.
      </p>
    </Page>
  ))
  .add("bash", () => (
    <Page>
      <p>
        <code className="language-bash">npm run develop</code>
      </p>
    </Page>
  ))
  .add("html", () => (
    <Page>
      <pre>
        <code className="language-html">
          &lt;title&gt;Look at me, I am a title!&lt;/title&gt;
        </code>
      </pre>
    </Page>
  ))
  .add("javascript", () => (
    <Page>
      <pre>
        <code className="language-javascript">
          const x = "something x related" const y = 2 console.log(x + y) // you
          can put this in a function
        </code>
      </pre>
    </Page>
  ))
  .add("clojure", () => (
    <Page>
      <pre>
        <code className="language-clojure">
          (let [greeting "hello" name "Clarice"] (println (str greeting " "
          name))) ; You can put this in a function
        </code>
      </pre>
    </Page>
  ))

//TODO: fix token tag (it's styling it with tag when it shouldn't)
