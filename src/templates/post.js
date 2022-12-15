import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';

export const query = graphql`  
  query($id: ID!){
    wpgraphql{
      post(id: $id){
        title
        ACFcontentSections{
          sections{
            __typename
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
        flexSections.map(({flexibleSection, index}) => {
          const {__typename, ...sectionData} = flexibleSection;
          return(
            <FlexibleSections key={index} typename={__typename} sectionData={{...sectionData}} />
          )
        })        
      }

    </Layout>
  )
}

export default PostTemplate;