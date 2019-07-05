// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ZAPISKI Z FRONTU",
  siteDescription: "blog o vue,react, javascript oraz programowaniu ogółem",
  titleTemplate: `%s - Gridsome`,
  plugins: [
    "@gridsome/remark-prismjs",

    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post"
      }
    }
  ]
};