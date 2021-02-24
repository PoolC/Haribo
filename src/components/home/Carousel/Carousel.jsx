import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

const CarouselBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  margin: 0px 0 80px 0;
`;

const MainCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-radius: 50px;
  box-shadow: ${colors.gray[1]};
  height: 50vh;
  overflow: hidden;
`;

const MainCarouselImage = styled.img`
  height: 50vh;
  border-radius: 50px;
`;

const CarouselButton = styled.button`
  position: relative;
  font-size: 1rem;
  color: ${colors.brown[1]};
  opacity: 50%;
  transition: 0.3s;
  &:hover {
    opacity: 100%;
    transition: 0.3s;
  }
  &.carousel_prev {
    left: 30px;
  }
  &.carousel_next {
    right: 30px;
  }
`;

const Carousel = ({ imageURLs }) => {
  return (
    <CarouselBlock>
      <CarouselButton className="carousel_prev">
        <i className="fas fa-chevron-left"></i>
      </CarouselButton>
      <MainCarousel>
        {imageURLs.map((url, idx) => (
          <MainCarouselImage key={idx} src={url} alt="main_carousel_image" />
        ))}
      </MainCarousel>
      <CarouselButton className="carousel_next">
        <i className="fas fa-chevron-right"></i>
      </CarouselButton>
    </CarouselBlock>
  );
};

export default Carousel;
