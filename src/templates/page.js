import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/sections/_FlexibleSections/FlexibleSections';
import HPSlider from '../components/structure/HPSlider/HPSlider';

export const query = graphql`
  query($id: ID!){
    wpgraphql{
      page(id: $id){
        title
        ACFcontentSections{
          sections{
            __typename
            ...NewestpostsFragmentPage
            ...WysiwygeditorFragmentPage
            ...NewslettersignupFragmentPage
          }
        }
      }
      acfOptions {
        general {
          slides {
            slide {
              ... on WPGraphQL_Post {
                id
                uri
                title
                date
                categories {
                  nodes {
                    id
                    uri
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PageTemplate = ({data, location}) => {
  const page = data.wpgraphql.page;
  const acfOptions = data.wpgraphql.acfOptions.general;
  const flexSections = page.ACFcontentSections.sections;
  
  return(
    <Layout>
      {
        location.pathname === '/' ? <HPSlider acfOptions={acfOptions}></HPSlider> : ''
      }
      
      {
        flexSections.map((flexibleSection, index) => {
          const {__typename, ...sectionData} = flexibleSection;
          return(
            <FlexibleSections key={index} typename={__typename} sectionData={{...sectionData}} />
          )
        })
      }
    </Layout>
  )
};

export default PageTemplate;