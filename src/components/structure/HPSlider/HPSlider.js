import React from 'react';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {Swiper, SwiperSlide} from 'swiper/react';
import * as styles from './HPSlider.module.scss';

import 'swiper/css';

const HPSlider = ({acfOptions}) => {

  const HPSlides = acfOptions.slides;
  return(
    <div className={styles.hpSlider}>
      <Container>
        <Row>
          <Col classes="col-xs-12 col-lg-1"></Col>
          <Col classes="col-xs-12 col-lg-10">
            <Swiper>
              {
                HPSlides.map(HPSlide => {
                  const slideCategories = HPSlide.slide.categories.nodes;
                  const id = HPSlide.slide.id;
                  const title = HPSlide.slide.title;
                  const date = HPSlide.slide.date;
                  const uri = HPSlide.slide.uri;

                  return(
                    <SwiperSlide key={id}>
                      {title ? <h2>{title}</h2> : null}
                      {date ? <p>{date}</p> : null}
                      {uri ? <a href={uri}>Czytaj więcej</a> : null}
                      {
                        slideCategories.map(slideCategory => {
                          return(
                              <a key={id} href={slideCategory.uri}><p>{slideCategory.name}</p> </a>
                          )
                        })
                      }
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </Col>
          <Col classes="ccol-xs-12 col-lg-1"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default HPSlider;