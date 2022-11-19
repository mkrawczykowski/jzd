import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Container from '../../structure/Container/Container';



const NewestPosts = ({ data }) => {

  const newestPostsNumber = data.newestPostsNumber;
  const skip = data.skip;
  const layout = data.layout;

  const postsQuery = useStaticQuery(graphql`
  query{
    wpgraphql {
      posts {
        nodes {
          uri
          title
          ACFpostExcerpt {
            postExcerpt
          }
          date
          categories {
            nodes {
              name
              uri
            }
          }
        }
      }
    }
  }
`)

const allPosts = postsQuery.wpgraphql.posts.nodes;

  return(
    <Container>
      <section>
        {
          allPosts.map((post, index) => {
            const displayPost = ( ) => {
              const postCategories = post.categories.nodes;
              return(
                  <div>
                    <h2>{ post.title }</h2>
                    <ul>
                      { 
                        postCategories.map(postCategory => {
                          return(
                            <li><a href={ postCategory.uri }>{ postCategory.name }</a></li>
                          )
                        })
                      }
                    </ul>
                    <p>{ post.date }</p>
                    <p>{ post.ACFpostExcerpt.postExcerpt }</p>
                  </div>
                )
            }
            return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? displayPost() : ''

          }) 
        }
      </section>
    </Container>
  )
};

export default NewestPosts

export const query = graphql`
  fragment NewestpostsFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    newestPostsNumber
    skip
    layout
  }
`;