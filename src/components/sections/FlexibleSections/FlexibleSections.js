import React from 'react'
import NewestPosts from '../NewestPosts/NewestPosts'
import WYSIWYGEditor from '../WYSIWYGEditor/WYSIWYGEditor'

const FlexibleSections = ({typename, sectionData}) => {

  switch(typename){
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor':
      return <WYSIWYGEditor data={ sectionData } />
    break;
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Newestposts':
      return <NewestPosts data={ sectionData } />
    break;
  }
//  return(
//    <>
//     <pre>{ JSON.stringify(typename, null, 2) }</pre>
//     {/* { 
//     props.data.map(item => {
//       return(
//         <pre>{ JSON.stringify(item, null, 2) }</pre>
//       )
//     }) 
// } */}


//    </>
//  )
}

export default FlexibleSections;