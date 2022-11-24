import React from 'react';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HPSlider.module.scss';

import 'swiper/css';

const HPSlider = ({ acfOptions }) => {

  const HPSlides = acfOptions.slides;
  return(
    <Container>
      <Swiper>
        {
          HPSlides.map(HPSlide => {
            const slideCategories = HPSlide.slide.categories.nodes;
            const id = HPSlide.slide.title;
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
    </Container>
  )
}

export default HPSlider;