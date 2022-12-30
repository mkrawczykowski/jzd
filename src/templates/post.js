import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';
import {Container} from '../components/structure/Grid/Grid';
import PostCategories from '../components/partials/PostCategories/PostCategories';

export const queryPost = graphql`
  query($id: ID!){
    wpgraphql{
      post(id: $id){
        title
        date
        categories {
          nodes {
            id
            name
            slug
          }
        }
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
  const categories = post.categories.nodes;
  const date = post.date;

  return(
    <Layout>
      <Container>
        <h1>{post.title}</h1>
        <PostCategories categories={categories} date={date}></PostCategories>
      </Container>
      
      {
        flexSections.map((flexSection, index) => {
          const {__typename, ...sectionData} = flexSection;

          return(
            <FlexibleSections key={index} typename={__typename} sectionData={sectionData} />  
          )
        })
      }
    </Layout>
  )
}

export default PostTemplate;