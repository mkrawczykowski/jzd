import React from 'react';
import {graphql} from 'gatsby';
import {Container, Col, Row} from '../../structure/Grid/Grid';

const NewsletterSignup = ({data}) => {
    return(
        <section>
            <Container>
                <Row>
                    <Col classes="col col-xl-2"></Col>
                    <Col classes="col col-xl-3">
                        <label for="email">
                            <input type="text" id="email" name="email"></input>
                        </label>
                    </Col>
                    <Col classes="col col-xl-1"></Col>
                    <Col classes="col col-xl-4"></Col>
                    <Col classes="col col-xl-2"></Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsletterSignup;

export const query = graphql`
    fragment NewslettersignupFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newslettersignup{
        privacyPolicyText
        text
        sectionsheading
    }
`