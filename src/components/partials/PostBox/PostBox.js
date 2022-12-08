import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import PostCategories from '../PostCategories/PostCategories';
import {Row, Col} from '../../structure/Grid/Grid.js';
import * as styles from './PostBox.module.scss';

const PostBox = ({id, title, excerpt, uri, date, categories}) => {
  if (excerpt){
    return(
      <div className={styles.postBox}>
        <Row>
          <Col classes="col-lg-4">
            {title && uri ? <a href={uri} className={styles.postBox__title}><h2>{title}</h2></a> : null}
            <PostCategories categories={categories} date={date}></PostCategories>
          </Col>
          <Col classes="col-lg-1"></Col>
          <Col classes="col-lg-3">
            {excerpt ? <p className={styles.postBox__excerpt}>{excerpt}</p> : null}
            <RoundedButton href={uri} halign="right"></RoundedButton>         
          </Col>
        </Row>
      </div>
    )    
  } else {
    return(
      <div className={styles.postBox}>
        {title && uri ? <a href={uri} className={styles.postBox__title}><h2>{title}</h2></a> : null}
        <PostCategories categories={categories} date={date}></PostCategories>
        <RoundedButton href={uri}></RoundedButton>
      </div>
    )
  }

}

export default PostBox;