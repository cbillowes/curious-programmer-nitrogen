⬅️ [README](/README.md)

## 🧐 What's inside?# { **curious** programmer }

## Features

### 😎 **Styling JavaScript.**

I am using [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) to style JavaScript code in Markdown files and across the website.

All inline code should contain the name of the language followed by the inline marker **±**.
Such as [bash±ping 127.0.0.1] or [clojure±(def hello "world")].

Code blocks should contain the name of the language after the block marker eg. \`\`\`bash or \`\`\`clojure.

### 🖖Emojify content.

I am using [gatsby-remark-emojis](https://www.gatsbyjs.org/packages/gatsby-remark-emoji/) to display emojis created in markdown files.
Using the `::` syntax and some of the [references](https://www.webfx.com/tools/emoji-cheat-sheet/) which list emojis used in Slack,
I am able to transform `:smile:` into 😊

### ▶️️ **YouTube videos.**

`youtube:https://www.youtube.com/embed/2Xc9gXyf2G4`

Using [gatsby-remark-embed-youtube](https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/)

### 🃏**Fonts**

Check out [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) and grab icons from [fontawesome.com](https://fontawesome.com/icons).

Import the dependency and the icon then reference it. If you want you can use `styled-components` to make it pretty.

```jsx
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Icon = styled(FontAwesomeIcon)`
  margin: 15px;
  font-size: 30px;
  display: inline-block;
`
<Icon icon={faSearch}></Icon>
```
