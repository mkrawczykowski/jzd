import React from 'react';
import { graphql } from 'gatsby';

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
    <>
      { page.title }
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )

}

export default PageTemplate;