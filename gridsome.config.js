// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ZAPISKI Z FRONTU",
  siteUrl: "http://localhost:8080",
  siteDescription: "blog o vue,react, javascript oraz programowaniu ogółem",
  titleTemplate: `%s`,
  plugins: [
    "@gridsome/remark-prismjs",

    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-116838634-2"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000,
        exclude: ["/exclude-me"],
        config: {
          "/blog/*": {
            changefreq: "weekly",
            priority: 0.5
          },
          "/about": {
            changefreq: "monthly",
            priority: 0.7
          }
        }
      }
    }
  ],

};
