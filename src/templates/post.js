import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';

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
`;

const PostTemplate = ({data}) =>{ 
  const post = data.wpgraphql.post;
  const flexSections = post.ACFcontentSections.sections;

  return(
    <Layout>
      {
        flexSections.map((flexSection, index) => {
          const {__typename, ...sectionData} = flexSection;
          console.log('dupa');
          console.log(__typename);

          return(
            <FlexibleSections key={index} typename={__typename} sectionData={sectionData} />  
          )
        })
      }
    </Layout>
  )
}

export default PostTemplate;