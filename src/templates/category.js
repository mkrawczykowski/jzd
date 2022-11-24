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

const CategoryTemplate = ({data}) =>{ 
  const category = data.wpgraphql.category;
  const posts = data.wpgraphql.category.posts.nodes;

  return(
    <Layout>
      <Container>
        {
          posts.map(post => {
            const title = post.title;
            const postExcerpt = post.ACFpostExcerpt.postExcerpt;;
            const uri = post.uri;

            return(
              <div>
                {title ? <h2>{title}</h2> : null}
                {postExcerpt ? <p>{postExcerpt}</p> : null}
                {uri ? <p>{uri}</p> : null}
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