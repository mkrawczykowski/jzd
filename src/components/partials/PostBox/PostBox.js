import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import PostCategories from '../PostCategories/PostCategories';

const PostBox = ({ id, title, excerpt, uri, date, categories }) => {
  return(
    <div>
      <h2>{ title }</h2>
      <PostCategories categories={ categories }></PostCategories>
      <RoundedButton href={ uri }></RoundedButton>
      <p>{ date }</p>
      {/* {excerpt ? <p>{excerpt}</p> : null} */}
      <pre>{JSON.stringify(excerpt, null, 2)}</pre>
    </div>
  )
}

export default PostBox;