import React from 'react';
import Container from '../Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HPSlider.module.scss';

import 'swiper/css';

const HPSlider = ({ acfOptions }) => {

  const HPSlides = acfOptions.slides;
  // <pre>{ JSON.stringify(acfOptions.slides,null,2) }</pre>
  return(
    <Container>
      {/* <pre>{ JSON.stringify(HPSlides,null,2) }</pre> */}

      <Swiper>

        {
          HPSlides.map(HPSlide => {
            const slideCategories = HPSlide.slide.categories.nodes;
            return(
              <SwiperSlide>
                { JSON.stringify(HPSlide.slide.categories.nodes,null,2) }
                {/* <pre>{ JSON.stringify(slide.categories.nodes,null,2) }</pre> */}
                <h2>{ HPSlide.slide.title }</h2>
                <p>{ HPSlide.slide.date }</p>
                <a href={ HPSlide.slide.uri }>Czytaj więcej</a>
                {
                  slideCategories.map(slideCategory => {
                    return(
                      
                        <a href={ slideCategory.uri }><p>{ slideCategory.name }</p> </a>
                      
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

// export const query = graphql(`
//   fragment HPSliderFragment{
//     slides {
//       slide {
//         ... on WPGraphQL_Post {
//           id
//           uri
//           title
//           date
//           categories {
//             nodes {
//               uri
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `)