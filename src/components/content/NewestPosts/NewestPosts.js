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
          title
        }
      }
    }
  }
`)

const allPosts = postsQuery.wpgraphql.posts.nodes;

  return(
    <Container>
      <section>
        {/* { data.newestPostsNumber }
        { data.skip }
        { data.layout } */}
        { typeof skip }<br></br>
        { newestPostsNumber + skip }<br></br>
        sssssss<br></br>
        <br></br>
        {
        allPosts.map((post, index) => {
          return index + 1 > skip && index + 1 <= newestPostsNumber + skip ? <h2>{ `${index}: ${post.title}` }</h2> : ''
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