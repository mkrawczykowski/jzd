import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './Footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            wpgraphql {
                acfOptions {
                    footer {
                        designAuthorInfo
                        designAuthorName
                        designAuthorUrl
                        privacyPolicyLink {
                            ... on WPGraphQL_Page {
                              id
                              uri
                            }
                        }
                    }
                }
            }
        }
    `)
    const footerData = data.wpgraphql.acfOptions.footer;

    return (
        <footer className={ styles.footer }>
            <div className={ styles.container }>
                test
                <ul>
                    <li><a href={ footerData.privacyPolicyLink.uri }>Polityka prywatności</a></li>
                    <li>
                        { footerData.designAuthorInfo }
                        <a href={ footerData.designAuthorUrl }>
                            { footerData.designAuthorName }
                        </a>
                    </li>
                </ul>
                test2
            </div>
        </footer>
    )
}

export default Footer;