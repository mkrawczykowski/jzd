exports.createPages = async ({ actions, graphql }) =>{
  const result = await graphql(`
    query  {
      wpgraphql {
        allSettings {
          readingSettingsPageOnFront
        }
        pages {
          nodes {
            id
            uri
          }
        }
        posts {
          nodes {
            id
            uri
          }
        }
      }
    }
  `);

  const pages = result.data.wpgraphql.pages.nodes;
  const posts = result.data.wpgraphql.posts.nodes;

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve('./src/templates/page.js'),
      context: {
        id: page.id,
      }
    })
  });
  posts.forEach(post => {
    actions.createPage({
      path: post.uri,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id
      }
    })
  });
};