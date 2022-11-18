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
            databaseId
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
  `)

  const pages = result.data.wpgraphql.pages.nodes;
  const posts = result.data.wpgraphql.posts.nodes;
  const allSettings = result.data.wpgraphql.allSettings;

  const isFrontPage = (id, databaseId) => {
    return id === databaseId ? true : false
  }

  pages.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: require.resolve('./src/templates/page.js'),
      context: {
        id: page.id,
        isFrontPage: isFrontPage()
      }
    })
  })
  posts.forEach(post => {
    actions.createPage({
      path: post.uri,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id
      }
    })
  })
}