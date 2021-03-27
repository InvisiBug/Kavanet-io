module.exports = {
  siteMetadata: {
    title: "Kavanet.io",
    description: "My portfolio site",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem", // Used to load mdx files from pages
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator", // Used to load mdx files from guide
      options: {
        path: `${__dirname}/src/guides`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`, // Used to parse the markdown
      options: {
        defaultLayouts: {
          guides: require.resolve("./src/lib/templates/guide.js"), // Set a specific filesystem to a specific layout
          default: require.resolve("./src/lib/templates/guide.js"), // Set all others to a default layout
        },
      },
    },
  ],
};
