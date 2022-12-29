import React from 'react'
import NewestPosts from '../NewestPosts/NewestPosts'
import WYSIWYGEditor from '../WYSIWYGEditor/WYSIWYGEditor'
import NewsletterSignup from '../NewsletterSignup/NewsletterSignup'

const FlexibleSections = ({typename, sectionData}) => {
  // console.log('sectionData: ');
  // console.log(sectionData);
  // <pre>{JSON.stringify(sectionData, null, 2)}</pre>

  let sectionName = typename.substring(typename.lastIndexOf('_')+1,typename.length);

  switch(sectionName){
    case 'Wysiwygeditor':
      return <WYSIWYGEditor data={sectionData} />
    case 'Newestposts':
      return <NewestPosts data={sectionData} />
    case 'Newslettersignup':
      return <NewsletterSignup data={sectionData} />
  }
}

export default FlexibleSections;