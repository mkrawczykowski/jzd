import React from 'react'
import NewestPosts from '../NewestPosts/NewestPosts'
import WYSIWYGEditor from '../WYSIWYGEditor/WYSIWYGEditor'
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup'

const FlexibleSections = ({typename, sectionData}) => {
  // console.log('sectionData: ');
  // console.log(sectionData);
  // <pre>{JSON.stringify(sectionData, null, 2)}</pre>

  switch(typename){
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Wysiwygeditor':
      return <WYSIWYGEditor data={sectionData} />
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Newestposts':
      return <NewestPosts data={sectionData} />
    case 'WPGraphQL_Page_Acfcontentsections_Sections_Newslettersignup':
      return <NewsletterSignup data={sectionData} />
  }
}

export default FlexibleSections;