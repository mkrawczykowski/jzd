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
                        // trying to use URL field
                        // https://github.com/wp-graphql/wp-graphql-acf
                        privacyPolicyLink{
                            link
                        }
                    }
                }
            }
        }
    `)
    const footerData = data.wpgraphql.acfOptions.footer;

    return (
        <footer className={ styles.footer }>
            <ul>
                <li><a href={ footerData.privacyPolicyLink }>Polityka prywatności</a></li>
                <li>
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