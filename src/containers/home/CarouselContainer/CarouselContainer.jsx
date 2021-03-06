import React, { useState, useEffect } from 'react';
import Carousel from '../../../components/home/Carousel/Carousel';
import * as infoAPI from '../../../lib/api/info';

const CarouselContainer = () => {
  const [mainImageUrl, setMainImageUrl] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setMainImageUrl(res.data.mainImageUrl);
      }
    });
  });

  if (mainImageUrl === null) return null;

  const imageURLs = mainImageUrl;
  return <Carousel imageURLs={imageURLs} />;
};

export default CarouselContainer;
