import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import PostCategories from '../PostCategories/PostCategories';
import {Row, Col} from '../../structure/Grid/Grid.js';
import * as styles from './PostBox.module.scss';

const PostBox = ({id, title, excerpt, uri, date, categories}) => {
  return(
    <div className={styles.postBox}>
      <Row>
        <Col classes="col-lg-5">
          {title ? <h2 className={styles.postBox__title}>{title}</h2> : null}
          <PostCategories categories={categories} date={date}></PostCategories>
        </Col>
        <Col classes="col-lg-3">
          {excerpt ? <p className={styles.postBox__excerpt}>{excerpt}</p> : null}
          <RoundedButton href={uri}></RoundedButton>         
        </Col>
      </Row>
    </div>
  )
}

export default PostBox;