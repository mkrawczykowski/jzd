import React from 'react';

const PostCategories = ({ categories }) => {
  return(
    <ul>
        { 
          categories.map(category => {
            return(
              <li><a href={ category.uri }>{ category.name }</a></li>
            )
          })
        }
      </ul>
  )
}

export default PostCategories;