import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';

const PostBox = ({ id, title, excerpt, uri, date, categories }) => {
  return(
    <div>
      <h2>{ title }</h2>
      <ul>
        { 
          categories.map(category => {
            return(
              <li><a href={ category.uri }>{ category.name }</a></li>
            )
          })
        }
      </ul>
      <RoundedButton href={ uri }></RoundedButton>
      <p>{ date }</p>
      <p>{ excerpt }</p>
    </div>
  )
}

export default PostBox;