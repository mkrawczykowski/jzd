import React from 'react'

const FlexibleSections = (props) => {


 return(
   <>
    <pre>{ JSON.stringify(props, null, 2) }</pre>
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