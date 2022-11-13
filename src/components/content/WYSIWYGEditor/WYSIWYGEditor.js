import React from 'react'
import { graphql } from "gatsby"

const WYSIWYGEditor = ({ data }) => {
  return(
    <>
    <section>
      <p dangerouslySetInnerHTML={{__html: data.wysiwygEditor}}></p>

      
    </section>
    </>
  )
}

export default WYSIWYGEditor

export const query = graphql`
  fragment WysiwygeditorFragment on WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor{
    wysiwygEditor
  }
`