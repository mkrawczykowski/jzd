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

const PageTemplate = ( { data }) =>{ 
  return(
    <>
      { data.title }
    </>
  )

}

export default PageTemplate;