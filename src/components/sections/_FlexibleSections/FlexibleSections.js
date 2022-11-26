import React from 'react'
import NewestPosts from '../NewestPosts/NewestPosts'
import WYSIWYGEditor from '../WYSIWYGEditor/WYSIWYGEditor'

const FlexibleSections = ({typename, sectionData}) => {

  switch(typename){
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor':
      return <WYSIWYGEditor data={sectionData} />
    break;
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Newestposts':
      return <NewestPosts data={sectionData} />
    break;
  }
}

export default FlexibleSections;