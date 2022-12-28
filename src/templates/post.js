import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';

export const queryPost = graphql`
  query($id: ID!){
    wpgraphql{
      post(id: $id){
        title
        ACFcontentSections{
          sections{
            __typename
            ...NewestpostsFragmentPost
            ...WysiwygeditorFragmentPost
            ...NewslettersignupFragmentPost
          }
        }
      }
    }
  }
`

const PostTemplate = ({data}) =>{ 
  const post = data.wpgraphql.post;

  return(
    <Layout>
      
    </Layout>
  )

}

export default PostTemplate;