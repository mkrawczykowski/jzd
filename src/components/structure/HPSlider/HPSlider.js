import React from 'react';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HPSlider.module.scss';

import 'swiper/css';

const HPSlider = () => {
  return(
    <Container>
      <Swiper>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default HPSlider;