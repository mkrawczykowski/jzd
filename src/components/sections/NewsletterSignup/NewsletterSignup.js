import React from 'react';
import {Container, Col, Row} from '../../structure/Grid/Grid';

const NewestPosts = ({data}) => {
    return(
        <section>
            <Container>
                <Row>
                    <Col classes="col col-xl-2"></Col>
                    <Col classes="col col-xl-3"></Col>
                    <Col classes="col col-xl-1"></Col>
                    <Col classes="col col-xl-4"></Col>
                    <Col classes="col col-xl-2"></Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewestPosts;

export const query = graphql`
    fragment NewsletterSignup on WPGraphQL_Page_Acfcontentsections_Sections_Newslettersignup{
        privacyPolicyText
        text
        sectionsheading
    }
`