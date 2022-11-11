import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

export const query = graphql`
  query($id: ID!){
    wpgraphql{
      post(id: $id){
        title
      }
    }
  }
`

const PostTemplate = ( { data } ) =>{ 
  const post = data.wpgraphql.post;

  return(
    <Layout>
      { post.title }
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )

}

export default PostTemplate;