module.exports = {
  siteMetadata: {
    brand: `Curious Programmer`,
    title: `A curious place for a curious mind.`,
    description: `I share thoughts. I share ideas. I share knowledge. This is my blog as a curious programmer.`,
    siteUrl: `https://curiousprogrammer.dev`,
    author: `Clarice Bouwer`,
    handle: `@cbillowes`,
    image: `/social-media/curiousprogrammer.dev.png`,
    lang: "en-US",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77127562-3",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://curiousprogrammer.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
        sourceMap: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 100,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://curiousprogrammer.dev",
        sitemap: "https://curiousprogrammer.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/root`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./content/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/src/images/interactive-gifs`,
              dest: `${__dirname}/public/gifs`,
              play: `${__dirname}/src/images/gifs/play.gif`,
              placeholder: `${__dirname}/src/images/gifs/placeholder.gif`,
              loading: `${__dirname}/src/images/gifs/loading.gif`,
              relativePath: `/gifs`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
            },
          },
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: `gatsby-remark-code-title`,
            },
          },
          `gatsby-remark-images`,
          `gatsby-remark-emoji`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: `cbillowes`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: `±`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        quality: 100,
        height: 350,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Curious Programmer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#c6c91c`,
        theme_color: `#c6c91c`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
