import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2, H3 } from "../components/heading"
import Credit from "../components/credit"
import { PrettyExternalLink } from "../components/link"

const CreditsPage = () => (
  <Layout>
    <SEO title="Credits">
      The tech I use to craft this blog.
    </SEO>
    <H1>Credits</H1>
    <div>
      <H2>Hosting</H2>
      <Credit 
        to="https://www.cloudafrica.net/"
        title="CloudAfrica"
      >
        is where I host my cloud server. It runs a Solr instance which powers the search for my blog.
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
      <H2>Site Generation</H2>
      <Credit
        to="https://www.gatsbyjs.com/"
        title="Gatsby"
      >
        is the super cool static site generator that I use to generate the blog from markdown files. 
        Gatsby is a React-based, GraphQL powered, static site generator. 
        <ul>
          <li>
            <PrettyExternalLink 
              to="https://github.com/Vagr9K/gatsby-advanced-starter"
            >
              Vagr9K/gatsby-advanced-starter
            </PrettyExternalLink>
            is the skeleton starter pack that I used
          </li>
          <li>
            <PrettyExternalLink 
              to="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/"
            >
              gatsby-remark-prismjs
            </PrettyExternalLink>
            adds syntax highlighting to my markdown code blocks 
          </li>
          <li>
            <PrettyExternalLink 
              to="https://www.gatsbyjs.org/packages/gatsby-remark-embed-gist/"
            >
              gatsby-remark-embed-gist
            </PrettyExternalLink> 
            embeds Gist snippets in my markdown files
          </li>
          <li>
            <PrettyExternalLink 
              to="https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/"
            >
              gatsby-remark-embed-youtube
            </PrettyExternalLink>
            embeds YouTube videos in my markdown files
          </li>
        </ul>
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
      <Credit to="https://editor.method.ac" title="Method draw">
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
  </Layout>
)

export default CreditsPage