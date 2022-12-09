import React from 'react';
import RoundedButton from '../RoundedButton/RoundedButton';
import PostCategories from '../PostCategories/PostCategories';
import {Row, Col} from '../../structure/Grid/Grid.js';
import * as styles from './PostBox.module.scss';
import LinesEllipsis from 'react-lines-ellipsis'

const PostBox = ({id, title, excerpt, uri, date, categories}) => {
  if (excerpt){
    console.log('styles');
    console.log(styles);
    return(
      <div className={styles.postBox}>
        <Row>
          <Col classes="col-lg-4">
            {title && uri ? <a href={uri} className={[styles.postBox__title, styles.postBox__titleOption1].join(' ')}><LinesEllipsis text={title} maxLine='3' ellipsis='...' trimRight basedOn='letters' component='h3'></LinesEllipsis></a> : null}
            <PostCategories categories={categories} date={date}></PostCategories>
          </Col>
          <Col classes="col-lg-1"></Col>
          <Col classes="col-lg-3">
            <p className={styles.postBox__excerpt}>{excerpt}</p>
            <RoundedButton href={uri} halign="right"></RoundedButton>         
          </Col>
        </Row>
      </div>
    )    
  } else {
    return(
      <div className={[styles.postBox, styles.postBoxPositionRelative].join(' ')}>
        {title && uri ? <a href={uri} className={[styles.postBox__title, styles.postBox__titleOption2].join(' ')}><LinesEllipsis text={title} maxLine='3' ellipsis='...' trimRight basedOn='letters' component='h3'></LinesEllipsis></a> : null}
        <PostCategories categories={categories} date={date}></PostCategories>
        <RoundedButton href={uri} halign="right" position="absolute"></RoundedButton>
      </div>
    )
  }

}

export default PostBox;