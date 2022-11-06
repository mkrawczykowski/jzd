import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './MainMenu.module.scss';

const Mainmenu = () =>{
  const mainMenuQuery = useStaticQuery(graphql`
    query{
      wpgraphql {
        menu(id: "dGVybTozNw==") {
          menuItems {
            nodes {
              label
              uri
            }
          }
        }
      }
    }
  `)

  const mainmenuItems = mainMenuQuery.wpgraphql.menu.menuItems;

  return(
    <>
      <nav className={ styles.mainMenu }>
        <ul>
          { mainMenuQuery.wpgraphql.menu.menuItems.nodes.map( link => {
            return(
              <li>{ link.label }</li>
            )
          })
          }
        </ul>
      </nav>
      {/* { JSON.stringify(mainMenuQuery, null, 2) } */}
    </>
  )
}

export default Mainmenu;