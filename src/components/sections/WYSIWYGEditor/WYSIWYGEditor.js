import React from 'react';
import {graphql} from "gatsby";
import {Container, Row, Col} from '../../structure/Grid/Grid';

const WYSIWYGEditor = ({data}) => {
  const wysiwygEditor = data.wysiwygEditor;

  return(
    <section>
      <Container>
        <Row>
          <Col classes="col col-xl-10">
            <div dangerouslySetInnerHTML={{__html: wysiwygEditor}}></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WYSIWYGEditor;

export const query = graphql`
  fragment WysiwygeditorFragment on WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor{
    wysiwygEditor
  }
`;