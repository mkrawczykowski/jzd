import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/content/FlexibleSections/FlexibleSections';
import HPSlider from '../components/structure/HPSlider/HPSlider';

export const query = graphql`  
  query($id: ID!){
    wpgraphql{
      page(id: $id){
        title
        ACFcontentSections{
          sections{
            __typename
            ...NewestpostsFragment
            ...WysiwygeditorFragment
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

const PageTemplate = ( { data, location } ) => {
  const page = data.wpgraphql.page;
  const acfOptions = data.wpgraphql.acfOptions.general;
  const flexSections = page.ACFcontentSections.sections;
  
  return(
    <Layout>
      {/* <pre>{ JSON.stringify(acfOptions,null,2) }</pre> */}
      {
        location.pathname === '/' ? <HPSlider acfOptions={ acfOptions }></HPSlider> : ''
      }
      
      { 
        flexSections.map(flexibleSection => {
          const {__typename, ...sectionData} = flexibleSection;
          return(
            <FlexibleSections typename={__typename} sectionData={{...sectionData}} />
          )
        }) 
      }
    </Layout>
  )
};

export default PageTemplate;