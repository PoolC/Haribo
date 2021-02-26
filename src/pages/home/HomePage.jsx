import React from 'react';
import styled from 'styled-components';
import CarouselContainer from '../../containers/home/CarouselContainer/CarouselContainer';
import RecentNoticeContainer from '../../containers/home/RecentNoticeContainer/RecentNoticeContainer';
import RecentProjectContainer from '../../containers/home/RecentProjectContainer/RecentProjectContainer';

const HomePageBlock = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <HomePageBlock>
      <CarouselContainer />
      <RecentNoticeContainer />
      <RecentProjectContainer />
    </HomePageBlock>
  );
};

export default HomePage;
