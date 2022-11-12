import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
// import NewestPosts from '../components/content/NewestPosts/NewestPosts'

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

  return(
    <Layout>
      { page.title }
      {/* { page.ACFcontentSections } */}
      <pre>{JSON.stringify(page.ACFcontentSections.sections, null, 2)}</pre>
      {
        page.ACFcontentSections.sections.map(section => {
          return(
            <>
                { JSON.stringify(section.__typename, null, 2) }
                <br></br>  <br></br>      
            </>
          )
        })
      }
    </Layout>
  )

}

export default PageTemplate;