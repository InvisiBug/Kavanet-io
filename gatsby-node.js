// Gatsby watches for this file and creates functions based on whats here

const createPages = async ({ actions, graphql, reporter }) => {
  // node graphql interface so grahpql is called as a function
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Failed to create posts", results.errors);
  }

  const posts = result.data.allMdx.nodes;

  // using forEach instead of map because nothing is being returned
  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./UILibrary/templates/guide"),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};

module.exports = {
  createPages,
};
