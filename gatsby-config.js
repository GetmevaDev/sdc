module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ikdentalstudios.com",
        sitemap: "https://ikdentalstudios.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://cms-ikd.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `users`,
          `services`,
          `comments`,
          `articles`,
          `digital-case-submissions`,
          `category-articles`,
        ],
        singleTypes: [
          `nvigation-menu`,
          `contacts`,
          `logo`,
          `home-page`,
          `about-us-page`,
          `before-and-after`,
          `new-patients`,
          `reviews`,
          `blog-page`,
          `request-a-pickup`,
          `digital-case-submission-page`,
          `navigation-studio-accepted`,
          `common-meta-data`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/**/404", "/**/404.html"],
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
              allSitePage(filter: {context: {i18n: {routed: {eq: false}}}}) {
                edges {
                  node {
                    context {
                      i18n {
                        defaultLanguage
                        languages
                        originalPath
                      }
                    }
                    path
                  }
                }
              }
            }
          `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.edges.map(edge => {
            const {
              languages,
              originalPath,
              defaultLanguage,
            } = edge.node.context.i18n
            const { siteUrl } = site.siteMetadata
            const url = siteUrl + originalPath
            const links = [
              { lang: defaultLanguage, url },
              { lang: "x-default", url },
            ]
            languages.forEach(lang => {
              if (lang === defaultLanguage) return
              links.push({ lang, url: `${siteUrl}/${lang}${originalPath}` })
            })
            return {
              url,
              changefreq: "daily",
              priority: originalPath === "/" ? 1.0 : 0.7,
              links,
            }
          })
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Smile Design Center`,
        start_url: `/`,
        background_color: `#0C488E`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon_ik.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
