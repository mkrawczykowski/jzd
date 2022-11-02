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
                    }
                }
            }
        }
    `)
    const footerData = data.wpgraphql.acfOptions.footer;

    return (
        <footer className={ styles.footer }>
            <ul>
                <li><a href="http://gatsbyjs.com">Polityka prywatności</a></li>
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