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
      <ul>
        { mainMenuQuery.wpgraphql.menu.menuItems.nodes.map( link => {
          return(
            <li>{ link.label }</li>
          )
        })
        }
      </ul>
      
      {/* { JSON.stringify(mainMenuQuery, null, 2) } */}
    </>
  )
}

export default Mainmenu;