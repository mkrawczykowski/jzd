import React from 'react';
import * as styles from './PostCategories.module.scss';

const PostCategories = ({ categories, date }) => {
  return(
    <div className={styles.postCategories}>
      <ul className={styles.postCategories__categories}>
        { 
          categories.map(category => {
            return(
              <li><a href={ category.uri }>{ category.name }</a></li>
            )
          })
        }
      </ul>
      <p className={styles.postCategories__date}>{date}</p>
    </div>
  )
}

export default PostCategories;