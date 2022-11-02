import React from 'react';
import { graphql } from 'gatsby';
import Layout from './components/structure/Layout/Layout';

export const query = graphql`
  query($id: ID!){
    wpgraphql{
      page(id: $id){
        title
      }
    }
  }
`

const PageTemplate = ( { data } ) =>{ 
  const page = data.wpgraphql.page;

  return(
    <Layout>
      { page.title }
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )

}

export default PageTemplate;