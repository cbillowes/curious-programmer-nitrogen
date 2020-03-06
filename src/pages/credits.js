import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReadingPane from '../components/readingPane'
import { H2 } from "../components/heading"
import Credit from "../components/credit"
import Anchor from "../components/anchor"

const CreditsPage = () => (
  <Layout
    className="credits-page"
    footer={true}
  >
    <SEO title="Credits">
      The tech I use to craft this blog.
    </SEO>
    <ReadingPane
      heading="Credits"
    >
      <div>
        <H2>Hosting</H2>
        <Credit
          to="https://www.cloudafrica.net/"
          title="CloudAfrica"
        >
          is where I host my cloud server which powers the search for my blog.
        </Credit>
        <Credit
          to="https://netlify.com"
          title="Netlify"
        >
          is where I host my website. It is an all-in-one workflow that combines global deployment,
          continuous integration and automatic HTTPS.
        </Credit>
      </div>

      <div>
        <H2>Search</H2>
        <Credit
          to="https://lucene.apache.org/solr/"
          title="Apache Solr"
        >
          is the service I run to power my search. It is a popular, blazing-fast, open source
          enterprise search platform built on Apache Lucene.
        </Credit>
        <Credit
          to="https://scrapy.org/"
          title="Scrapy"
        >
          is an open source and collaborative framework for extracting the data from websites.
        </Credit>
      </div>

      <div>
        <H2>Site Generation</H2>
        <Credit
          to="https://www.gatsbyjs.com/"
          title="Gatsby"
        >
          is the super cool static site generator that I use to generate the blog from markdown files.
          Gatsby is a React-based, GraphQL powered, static site generator.
          <ul>
            <li>
              <Anchor
                to="https://github.com/gatsbyjs/gatsby-starter-default"
              >
                gatsby-starter-default
              </Anchor>
              the default Gatsby start to kick off projects with this default boilerplate.
            </li>
            <li>
              <Anchor
                to="https://www.gatsbyjs.org/packages/gatsby-plugin-advanced-sitemap/"
              >
                gatsby-plugin-advanced-sitemap
              </Anchor>
              adds more power and configuration, generating a single or multiple sitemaps
              with full XSL templates to make them neatly organised and human + machine
              readable, as well linking image resources to encourage media indexing.
            </li>
            <li>
              <Anchor
                to="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/"
              >
                gatsby-plugin-robots-txt
              </Anchor>
              creates robots.txt files for your Gatsby sites.
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
          </ul>
        </Credit>

        <H2>Snippets</H2>
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

        <H2>Emojis</H2>
        <Credit
          to="https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb"
          title="oliveratgithub/emojis.json"
        >
          is the emoji-list full of emojis, names, shortcodes, unicode and html entities that I reference.
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
          Visual Studio Code is an open-source and free source code editor developed
          by Microsoft for Windows, Linux and macOS. It includes support for debugging,
          embedded Git control, syntax highlighting, intelligent code completion, snippets,
          and code refactoring.
        </Credit>
        <Credit
          to="https://pixlr.com/editor/"
          title="pixlr.com"
        >
          Pixlr is a cloud-based set of image tools and utilities, including a number of
          photo editors, a screen recorder browser extension, and a photo sharing service.
          The suite was intended for non-professionals, however the apps range from simple
          to advanced photo editing.
        </Credit>
        <Credit
          to="https://www.base64-image.de/"
          title="Base64 Image"
        >
          Base64 Image is an online image converter converting images to Base64 which can be
          embedded in code instead of making an HTTP request.
        </Credit>
        <Credit
          to="http://vectorpaint.yaks.co.nz/"
          title="Vector Paint"
        >
          Vector Paint is an SVG editor which gives you the ability to create unique artwork
          with shapes, color gradients and layers. You can use Vector Paint for
          posters, web graphics or diagrams.
        </Credit>
        <Credit
          to="https://editor.method.ac"
          title="Method draw"
        >
          Method draw is also an SVG editor which allows you to edit and save SVG images.
        </Credit>
      </div>

      <h2>Privacy Policy</h2>
      <div>
        <Credit
          to="https://www.iubenda.com"
          title="iubenda"
        >
          Attorney-level solutions to make your websites and apps compliant
          with the law across multiple countries and legislations.
        </Credit>
      </div>
    </ReadingPane>
  </Layout>
)

export default CreditsPage