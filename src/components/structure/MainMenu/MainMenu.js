import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import * as styles from './MainMenu.module.scss';

const Mainmenu = ({active}) =>{

  const mainMenuQuery = useStaticQuery(graphql`
    query{
      wpgraphql {
        menu(id: "dGVybTozNw==") {
          menuItems {
            nodes {
              label
              uri
              id
            }
          }
        }
      }
    }
  `)

  const mainmenuItems = mainMenuQuery.wpgraphql.menu.menuItems.nodes;
    console.log('MENU styles[active]');
    console.log(styles[active]);
  return(
    <ul className={[styles.mainMenu, styles[active]].join(' ')}>
      {mainmenuItems.map(link => {
        return(
          <li key={link.id} className={styles.mainMenu__item}><a href={link.uri} className={styles.mainMenu__link}>{link.label}</a></li>
        )
      })
      }
    </ul>
  )
}

export default Mainmenu;