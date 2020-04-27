import React from "react"
import Layout from "../layout"
import ReadingPane from '../readingPane'
import { H2 } from "../heading"
import Credit from "../credit"
import Anchor from "../anchor"
import '../../styles/page.scss'

const CreditsPage = () => (
  <Layout
    className="credits-page"
    footer={true}
  >
    <ReadingPane
      heading="Credits & Resources"
    >
      <div>
        <H2>Hosting</H2>
        <Credit
          to="https://netlify.com"
          title="Netlify"
        >
          is an all-in-one workflow that combines global deployment, continuous integration and automatic HTTPS
          and is where I host my blog.
        </Credit>
      </div>

      <div>
        <H2>Site Generation</H2>
        <Credit
          to="https://www.gatsbyjs.com/"
          title="Gatsby"
        >
          is a React-based, GraphQL powered, static site generator.
          It is the super cool and conveniently generates my blog from markdown files.
          <ul>
            <li>
              <Anchor
                to="https://github.com/gatsbyjs/gatsby-starter-default"
              >
                gatsby-starter-default
              </Anchor>
              is a boilerplate with some bells and whistles to help kick-off new Gatsby projects.
              This is the starter that I used for my blog.
            </li>
            <li>
              <Anchor
                to="https://fortawesome.com/"
              >
                fortawesome
              </Anchor>
              builds and manages icons and typefaces in a single place, then serves
              them with a single line of code.
            </li>
            <li>
              <Anchor
                to="https://github.com/zenorocha/clipboard.js#readme"
              >
                clipboard
              </Anchor>
              is a modern copy to clipboard library with no flash and gzipped to 3kb.
            </li>
            <li>
              <Anchor
                to="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap#readme"
              >
                gatsby-plugin-sitemap
              </Anchor>
            </li>
            <li>
              <Anchor
                to="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/"
              >
                gatsby-plugin-robots-txt
              </Anchor>
            </li>
            <li>
              <Anchor
                to="https://github.com/Rulikkk/gatsby-remark-emoji#readme"
              >
                gatsby-remark-emoji
              </Anchor>
              adds slack-style emoji to gatsby's markdown 🚀
            </li>
            <li>
              <Anchor
                to="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs#readme"
              >
                gatsby-remark-prismjs
              </Anchor>
              adds syntax highlighting to code blocks in markdown files using
              <Anchor to="https://prismjs.com/">PrismJs</Anchor>.
            </li>
            <li>
              <Anchor
                to="https://www.npmjs.com/package/gatsby-remark-responsive-iframe"
              >
                gatsby-remark-responsive-iframe
              </Anchor>
              wraps iframes or objects (e.g. embedded YouTube videos) within markdown files in a responsive
              elastic container with a fixed aspect ratio. This ensures that the iframe or object will scale
              proportionally and to the full width of its container.
            </li>
            <li>
              <Anchor
                to="https://github.com/ntwcklng/gatsby-remark-embed-youtube#readme"
              >
                gatsby-remark-embed-youtube
              </Anchor>
            </li>
            <li>
              <Anchor
                to="https://github.com/weirdpattern/gatsby-remark-embed-gist#readme"
              >
                gatsby-remark-embed-gist
              </Anchor>
            </li>
          </ul>
        </Credit>
      </div>

      <div>
        <H2>Code</H2>
        <Credit
          to="https://codepen.io/JohnOSTend/pen/ZXrwoM"
          title="Ribbons"
        >
          implemented using the "Various Styles CSS Ribbons" through a pen by
          <Anchor
            to="https://codepen.io/JohnOSTend"
          >
            John
          </Anchor>.
        </Credit>
      </div>

      <div>
        <H2>Emoji Resources</H2>
        <Credit
          to="https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb"
          title="oliveratgithub/emojis.json"
        >
          is the emoji-list full of emojis, names, short codes, unicode and html entities that I reference.
        </Credit>
        <br />
        <Credit
          to="https://www.webfx.com/tools/emoji-cheat-sheet/"
          title="webfx.com"
        >
          emoji cheat sheet.
        </Credit>
      </div>

      <div>
        <h2>Icons</h2>
        <Credit
          to="https://www.flaticon.com/free-icon/gmail_324123?term=gmail&page=1&position=38"
          title="Gmail"
        >
          &nbsp;
        </Credit>
        <Credit
          to="https://www.flaticon.com/free-icon/twitter_255331?term=twitter&page=1&position=20"
          title="Twitter"
        >
          &nbsp;
        </Credit>
        <Credit
          to="https://www.iconfinder.com/icons/1220346/overflow_stachoverflow_stack_stackoverflow_icon"
          title="StackOverflow"
        >
          &nbsp;
        </Credit>
        <Credit
          to="https://www.flaticon.com/free-icon/github_1322053?term=github&page=1&position=46"
          title="GitHub"
        >
          &nbsp;
        </Credit>
        <Credit
          to="https://www.flaticon.com/free-icon/linkedin_255319?term=linkedin&page=1&position=23"
          title="LinkedIn"
        >
          &nbsp;
        </Credit>
      </div>
      <div>
        <H2>Interactive animated gifs</H2>
        <Credit
          to="https://www.flaticon.com/free-icon/play_281903"
          title="Play icon"
        >
          Play icon made my <Anchor to="https://www.flaticon.com/authors/vitaly-gorbachev">Vitaly Gorbachev</Anchor> from <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
        </Credit>
        <Credit
          to="https://www.flaticon.com/free-icon/photo_2793644"
          title="Freepik"
        >
          Made by <Anchor to="https://www.flaticon.com/authors/freepik">Freepik</Anchor> from <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
        </Credit>
        <Credit
          to="https://www.flaticon.com/free-icon/photo_2793644"
          title="Freepick"
        >
          Made by <Anchor to="https://www.flaticon.com/authors/freepik">Freepik</Anchor> from <Anchor to="https://www.flaticon.com">www.flaticon.com</Anchor>.
        </Credit>
        <Credit
          to="https://loading.io/"
          title="Loading image"
        >
          Generated from loading.io - ajax Loader, animated icons, live backgrounds.
        </Credit>
      </div>
      <div>
        <H2>Photography</H2>
        <Credit
          to="https://picsum.photos"
          title="picsum.photos"
        >
          Lorem Ipsum... but for photos.
        </Credit>
      </div>

      <div>
        <H2>Tools</H2>
        <Credit
          to="https://code.visualstudio.com/"
          title="Microsoft Visual Studio Code"
        >
          is an open-source and free source code editor developed
          by Microsoft for Windows, Linux and macOS. It includes support for debugging,
          embedded Git control, syntax highlighting, intelligent code completion, snippets,
          and code refactoring. I also work with a bunch of
          <Anchor
            to="https://gist.github.com/cbillowes/b26b35133ee86fbd19bf3825f5a2736c"
          >
            extensions
          </Anchor>.
        </Credit>
        <br />
        <Credit
          to="https://pixlr.com/editor/"
          title="pixlr.com"
        >
          is a cloud-based set of image tools and utilities, including a number of
          photo editors, a screen recorder browser extension, and a photo sharing service.
          The suite was intended for non-professionals, however the apps range from simple
          to advanced photo editing.
        </Credit>
        <br />
        <Credit
          to="https://www.base64-image.de/"
          title="Base64 Image"
        >
          is an online image converter converting images to Base64 which can be
          embedded in code instead of making an HTTP request.
        </Credit>
        <br />
        <Credit
          to="http://vectorpaint.yaks.co.nz/"
          title="Vector Paint"
        >
          is an SVG editor which gives you the ability to create unique artwork
          with shapes, color gradients and layers. You can use Vector Paint for
          posters, web graphics or diagrams.
        </Credit>
        <br />
        <Credit
          to="https://editor.method.ac"
          title="Method draw"
        >
          is also an SVG editor which allows you to edit and save SVG images.
        </Credit>
      </div>

      <h2>Privacy Policy</h2>
      <div>
        <Credit
          to="https://www.iubenda.com"
          title="iubenda"
        >
          Attorney-level solutions to make your websites and apps compliant
          with the law across multiple countries and legislation.
        </Credit>
      </div>
    </ReadingPane>
  </Layout>
)

export default CreditsPage
