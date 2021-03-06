import React from 'react';
import { WhiteNarrowBlock } from '../../styles/common/Block.styles';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Body = styled.div`
  margin: auto;
  word-break: keep-all;
  padding: 0 3rem;
  line-height: 1.5rem;
  & > p,
  ul,
  ol {
    font-size: 0.8rem;
    font-weight: 300;
  }
  ul,
  ol {
    padding-left: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
  }
  hr {
    margin: 1rem 0;
  }
`;

const Intro = ({ introduction }) => {
  return (
    <WhiteNarrowBlock>
      <Title>PoolC 소개</Title>
      <Body>
        <ReactMarkdown plugins={[gfm]} source={introduction} />
      </Body>
    </WhiteNarrowBlock>
  );
};

export default Intro;
