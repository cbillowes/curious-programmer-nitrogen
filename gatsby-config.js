// TODO: CRITICAL! Arbitrary File Write in gatsby-plugin-sharp
// Watch https://github.com/kevva/decompress/pull/73 for patch

module.exports = {
  siteMetadata: {
    title: `Curious Programmer`,
    siteUrl: `https://curiousprogrammer.dev`,
    description: `A curious place for a curious mind.`,
    author: `@cbillowes`,
    lang: 'en-US',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://curiousprogrammer.dev',
        sitemap: 'https://curiousprogrammer.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
          `gatsby-remark-images`,
          `gatsby-remark-emoji`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              height: 400
            }
          }, {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: `cbillowes`,
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: `±`,
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
};
