import React, { useState, useEffect } from 'react';
import Carousel from '../../../components/home/Carousel/Carousel';
import * as infoAPI from '../../../lib/api/info';
import Spinner from '../../../components/common/Spinner/Spinner';

const CarouselContainer = () => {
  const [loading, setLoading] = useState(true);
  const [mainImageUrl, setMainImageUrl] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setMainImageUrl(res.data.mainImageUrl);
        setLoading(false);
      }
    });
  });

  return (
    <>
      {loading && <Spinner />}
      {!loading && <Carousel imageURLs={mainImageUrl} />}
    </>
  );
};

export default CarouselContainer;
