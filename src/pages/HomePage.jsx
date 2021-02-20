import React from 'react';
import CarouselContainer from '../containers/home/CarouselContainer';
import RecentNoticeContainer from '../containers/home/RecentNoticeContainer';
import RecentProjectContainer from '../containers/home/RecentProjectContainer';

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
