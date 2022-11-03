import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Mainmenu = () =>{
  const mainMenuQuery = useStaticQuery(graphql`
    query{
      wpgraphql {
        menu(id: "\"dGVybTozNw==\"") {
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
      { JSON.stringify(mainMenuQuery, null, 2) }
    </>
  )
}