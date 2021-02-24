import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import IntroMenu from '../../components/intro/IntroMenu/IntroMenu';
import { MENU } from '../../constants/menus';
import IntroContainer from '../../containers/intro/IntroContainer';

const IntroPageBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 600px;
    flex-direction: column;
  }
`;

const IntroPage = () => {
  const menus = [
    { name: 'PoolC 소개', url: '' },
    { name: '자주 묻는 질문', url: '/faq' },
    { name: 'SNS', url: '/sns' },
  ];
  return (
    <IntroPageBlock>
      <IntroMenu menus={menus} />
      <Switch>
        <Route component={IntroContainer} path={`/${MENU.INTRO}`} exact />
      </Switch>
    </IntroPageBlock>
  );
};

export default IntroPage;
