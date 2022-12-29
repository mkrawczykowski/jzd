import React from 'react';
import {graphql} from 'gatsby';
import {Container, Col, Row} from '../../structure/Grid/Grid';
import FormGDPR from '../../partials/FormGDPR/FormGDPR';
import * as styles from './newsletterSignup.module.scss';

const NewsletterSignup = ({data}) => {
    const sectionsHeading = data.sectionsHeading;
    const text = data.text;
    return(
        <section>
            <Container>
                <Row>
                    <Col classes="col col-xl-2"></Col>
                    <Col classes="col col-xl-3">
                        {sectionsHeading ? <h2 className={styles.newsletterSignup}>{sectionsHeading}</h2> : null}
                        {text ? <div dangerouslySetInnerHTML={{__html: text}}></div> : null}
                    </Col>
                    <Col classes="col col-xl-1"></Col>
                    <Col classes="col col-xl-4">
                        <FormGDPR></FormGDPR>
                    </Col>
                    <Col classes="col col-xl-2"></Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewsletterSignup;

export const pageQuery = graphql`
    fragment NewslettersignupFragmentPage on WPGraphQL_Page_Acfcontentsections_Sections_Newslettersignup{
        privacyPolicyText
        text
        sectionsHeading
    }
`
export const postQuery = graphql`
    fragment NewslettersignupFragmentPost on WPGraphQL_Post_Acfcontentsections_Sections_Newslettersignup{
        privacyPolicyText
        text
        sectionsHeading
    }
`