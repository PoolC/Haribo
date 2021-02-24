import React from 'react';
import Carousel from '../../../components/home/Carousel/Carousel';

const CarouselContainer = () => {
  const carouselImageURL =
    'https://user-images.githubusercontent.com/48787170/108064727-6f574280-70a0-11eb-8d27-d667d85f58ee.png';
  const imageURLs = [carouselImageURL, carouselImageURL, carouselImageURL];
  return <Carousel imageURLs={imageURLs} />;
};

export default CarouselContainer;
