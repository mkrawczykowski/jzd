import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

export const query = graphql`
  query($id: ID!){
    wpgraphql{
      category(id: $id){
        name
      }
    }
  }
`

const CategoryTemplate = ( { data } ) =>{ 
  const category = data.wpgraphql.category;

  return(
    <Layout>
      { category.name }
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )

}

export default CategoryTemplate;