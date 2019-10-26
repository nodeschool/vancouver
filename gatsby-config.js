/* eslint-env node */
const config = require(`./data/config.js`);
module.exports = {
  siteMetadata: config,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
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
        name: `mentors`,
        path: `${__dirname}/data/mentors`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: `nodeschool`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    config.meetupGroup ? {
      resolve: `gatsby-source-meetup`,
      options: {
        groupUrlName: config.meetupGroup,
        status: `upcoming,past`,
        desc: `true`,
        page: 10
      },
    } : null,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- excerpt -->`,
        plugins: [
          `gatsby-remark-source-name`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          {
            resolve: `gatsby-remark-embed-youtube`,
            options: {
              width: 800,
              height: 400
            }
          },

          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-emoji`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN
      }
    }
  ].filter(Boolean),
};
