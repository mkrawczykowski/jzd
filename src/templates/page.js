import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import FlexibleSections from '../components/content/FlexibleSections/FlexibleSections'

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

const PageTemplate = ( { data } ) =>{ 
  const page = data.wpgraphql.page;
  const flexSections = page.ACFcontentSections.sections;
  
  return(
    <Layout>
      { page.title }
      {/* <pre>{ JSON.stringify(flexibleSections, null, 2) }</pre> */}
      {/* <FlexibleSections {...flexibleSections} /> */}

      { flexSections.map(flexibleSection => {
        return(
          <pre>{ JSON.stringify(flexibleection, null, 2) }</pre>
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
        return(
          <>
            <pre>{ JSON.stringify(section, null, 2) }</pre>
            {/* <FlexibleSections { ...section } /> */}
            {/* <FlexibleSections test="testowanie" /> */}
          </>  
        )
      }) }
    </Layout>
  )

}

export default PageTemplate;