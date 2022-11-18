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
    }
  }
`

const PageTemplate = ( { data, location } ) =>{
  const page = data.wpgraphql.page;
  const flexSections = page.ACFcontentSections.sections;
  
  return(
    <Layout>
      {
        location.pathname === '/' ? <HPSlider></HPSlider> : ''
      }
      
      
      { page.title }
      <pre>{ JSON.stringify(data, null, 2) }</pre>
      {/* <FlexibleSections {...flexibleSections} /> */}

      { flexSections.map(flexibleSection => {
        const {__typename, ...sectionData} = flexibleSection;
        return(
          // <pre>{ JSON.stringify(rest, null, 2) }</pre>
          <FlexibleSections typename={__typename} sectionData={{...sectionData}} />
        )
        // const getSectionData = (__typename, ...sectionData) =>{
        //   return(
        //     {
        //       name: __typename
        //       // __typename,
        //       // data: sectionData
        //     }
        //   )
        // }
        // const section = getSectionData(flexibleSection);
      }) }
    </Layout>
  )

}

export default PageTemplate;