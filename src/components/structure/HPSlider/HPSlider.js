import React, {useRef} from 'react';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import * as styles from './HPSlider.module.scss';

import 'swiper/css';
import "swiper/css/navigation";

const HPSlider = ({acfOptions}) => {

  const HPSlides = acfOptions.slides;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return(
  <><div ref={navigationPrevRef}>sssssssssssssssssssssss</div>
      <div ref={navigationNextRef}>sssssssssssssssssssssss</div>
    {/* based on https://stackoverflow.com/questions/70324190/custom-arrow-swiper-slider-next-js-sass */}
    <section className={styles.hpSlider}>
    
      <Container>
        <Row>
          <Col classes="col-xs-12 col-lg-1"></Col>
          <Col classes="col-xs-12 col-lg-10">
          
            
            {/* <Swiper className={styles.swiperButtonPrev} onBeforeInit={(swiper) => {swiperRef.current = swiper; console.log(swiperRef.current.slidePrev);}}> */}
            <Swiper 
              className={styles.swiperButtonPrev}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
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
          <Col classes="col-xs-12 col-lg-1"></Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default HPSlider;