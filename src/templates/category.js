import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/structure/Layout/Layout';
import Container from '../components/structure/Container/Container';

export const query = graphql`
  query($id: ID!){
    wpgraphql{
      category(id: $id){
        name
        posts {
          nodes {
            id
            title
            ACFpostExcerpt {
              postExcerpt
            }
            uri
            date
          }
        }
      }
    }
  }
`

const CategoryTemplate = ( { data } ) =>{ 
  const category = data.wpgraphql.category;
  const posts = data.wpgraphql.category.posts.nodes;

  return(
    <Layout>
      <Container>
        { category.name }
        {
          posts.map(post => {
            return(
              <div>
                <h2>{ post.title }</h2>
                <p>{ post.ACFpostExcerpt.postExcerpt }</p>
                <p>{ post.uri }</p>
                <p>{ post.date }</p>
              </div> 
            )
          })
        }
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Container>
    </Layout>
  )

}

export default CategoryTemplate;