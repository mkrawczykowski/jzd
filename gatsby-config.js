/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//  import { resolve as _resolve } from 'path';
// const { dirname } = require('path');
// const appDir = dirname(require.main.filename);

 export const plugins = [
  {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'WPGraphQL',
      fieldName: 'wpgraphql',
      url: 'https://blogdeva.stronyireszta.pl/graphql'
    }
  },
  {
    // poniższe ustawienie znalazłem na https://stackoverflow.com/questions/57833884/include-sass-in-gatsby-globally
    // wraz z wyjaśnieniem
    // path.resolve użyłem dopiero po dodaniu require('path') [import resolve] na samej górze tego pliku (za https://github.com/gatsbyjs/gatsby/issues/19727)
    resolve: `gatsby-plugin-sass`,
    options: {
      additionalData: `@import "${_resolve(dirname(require.main.filename), '/src/styles/global.scss')}";`,
    }
  }
];