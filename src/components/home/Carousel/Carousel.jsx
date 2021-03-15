import React from 'react';
import getFileUrl from '../../../lib/utils/getFileUrl';
import {
  CarouselBlock,
  // CarouselButton,
  MainCarousel,
  MainCarouselImage,
} from './Carousel.styles';

const Carousel = ({ imageURLs }) => {
  return (
    <CarouselBlock>
      {/* <CarouselButton className="carousel_prev">
        <i className="fas fa-chevron-left"></i>
      </CarouselButton> */}
      <MainCarousel>
        <MainCarouselImage
          src={getFileUrl(imageURLs)}
          alt="main_carousel_image"
        />
      </MainCarousel>
      {/* <CarouselButton className="carousel_next">
        <i className="fas fa-chevron-right"></i>
      </CarouselButton> */}
    </CarouselBlock>
  );
};

export default Carousel;
