import React from 'react';
import CarouselContainer from '../../containers/home/CarouselContainer/CarouselContainer';
import RecentNoticeContainer from '../../containers/home/RecentNoticeContainer/RecentNoticeContainer';
import RecentProjectContainer from '../../containers/home/RecentProjectContainer/RecentProjectContainer';

const HomePage = () => {
  return (
    <>
      <CarouselContainer />
      <RecentNoticeContainer />
      <RecentProjectContainer />
    </>
  );
};

export default HomePage;
