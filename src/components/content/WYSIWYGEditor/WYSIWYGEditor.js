import React from 'react';
import { graphql } from "gatsby";
import Container from '../../structure/Container/Container';

const WYSIWYGEditor = ({ data }) => {
  return(
    <Container>
      <section>
        <p dangerouslySetInnerHTML={{__html: data.wysiwygEditor}}></p>
      </section>
    </Container>
  )
}

export default WYSIWYGEditor;

export const query = graphql`
  fragment WysiwygeditorFragment on WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor{
    wysiwygEditor
  }
`;