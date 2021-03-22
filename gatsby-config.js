module.exports = {
  siteMetadata: {
    title: "Kavanet.io",
    description: "My portfolio site",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-mdx",
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `guides`,
        path: `${__dirname}/src/guides/`,
      },
    },
  ],
};
