import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

const Intro = () => {
  return <IntroBlock></IntroBlock>;
};

export default Intro;
