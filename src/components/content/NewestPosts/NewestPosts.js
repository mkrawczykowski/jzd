import React from 'react';
import { graphql } from "gatsby";
import Container from '../../structure/Container/Container';

const NewestPosts = ({ data }) => {
  return(
    <Container>
      <section>
        { data.newestPostsNumber }
      </section>
    </Container>
  )
};

export default NewestPosts

export const query = graphql`
  fragment NewestpostsFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    newestPostsNumber
  }
`;