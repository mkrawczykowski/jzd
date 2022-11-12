import React from 'react'
import { graphql } from "gatsby"

// const NewestPosts = () => {
//   return(
//     <>
//       NewestPosts
//     </>
//   )
// }

// export default NewestPosts

export const query = graphql`
  fragment NewestpostsFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    newestPostsNumber
  }
`