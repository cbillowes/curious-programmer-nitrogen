module.exports = {
  siteMetadata: {
    title: `Curious Programmer: A curious place for a curious mind.`,
    siteUrl: `https://curiousprogrammer.dev`,
    description: `A curious place for a curious mind.`,
    author: `Clarice Bouwer`,
    twitter: `@cbillowes`,
    image: `/static/shares/default.png`,
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
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
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
              src: `${__dirname}/src/images/gifs`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/images/play.gif`,
              placeholder: `${__dirname}/src/images/placeholder.gif`,
              loading: `${__dirname}/src/images/loading.gif`,
              relativePath: `/static/gifs`,
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
    `gatsby-plugin-sharp`,
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
