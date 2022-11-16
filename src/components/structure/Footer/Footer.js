import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './Footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            wpgraphql {
                acfOptions {
                    general {
                        designAuthorInfo
                        designAuthorName
                        designAuthorUrl
                        privacyPolicyLink {
                            ... on WPGraphQL_Page {
                              id
                              uri
                            }
                        }
                        logo {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
        }
    `)
    const footerData = data.wpgraphql.acfOptions.general;

    return (
        <footer className={ styles.footer }>
            <ul className={ styles.footer__list }>
                <li className={ styles.footer__listItem }><a href={ footerData.privacyPolicyLink.uri }>Polityka prywatności</a></li>
                <li className={ styles.footer__listItem  }>
                    { footerData.designAuthorInfo }
                    <a href={ footerData.designAuthorUrl }>
                        { footerData.designAuthorName }
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;