import React from 'react'

const FlexibleSections = ({typename, sectionData}) => {


 return(
   <>
    <pre>{ JSON.stringify(typename, null, 2) }</pre>
    {/* { 
    props.data.map(item => {
      return(
        <pre>{ JSON.stringify(item, null, 2) }</pre>
      )
    }) 
} */}
   </>
 )
}

export default FlexibleSections;