import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const NewestPosts = ({ data }) => {
  return(
    <>
    <section>
      { data.newestPostsNumber }
    </section>
    </>
  )
}

export default NewestPosts

export const query = graphql`
  fragment NewestpostsFragment on WPGraphQL_Page_Acfcontentsections_Sections_Newestposts{
    newestPostsNumber
  }
`