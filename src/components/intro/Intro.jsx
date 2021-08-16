import React from 'react';
import { WhiteNarrowBlock } from '../../styles/common/Block.styles';
import styled from 'styled-components';
import getFileUrl from '../../lib/utils/getFileUrl';
import { Viewer } from '@toast-ui/react-editor';
import colors from '../../lib/styles/colors';
import Spinner from '../common/Spinner/Spinner';

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Body = styled.div`
  margin: auto;
  margin-bottom: 3rem;
  word-break: keep-all;
  padding: 0 1rem;
  line-height: 1.5rem;
  max-width: 100%;
  overflow: auto;
  color: ${colors.brown[1]};
  p,
  ul,
  ol {
    font-weight: 300;
    font-size: 0.9rem;
    color: ${colors.brown[1]};
  }
  ul,
  ol {
    padding-left: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    line-height: 2.2rem;
    color: ${colors.brown[1]};
  }
  hr {
    margin: 1rem 0;
  }
  img {
    max-width: 90%;
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }
  a {
    max-width: 100%;
    word-break: break-all;
  }
  th {
    background-color: ${colors.brown[0]};
  }
`;

const StyledImage = styled.img`
  width: 70%;
  max-width: 400px;
`;

const Intro = ({ loading, introduction, locationUrl }) => {
  return (
    <WhiteNarrowBlock>
      <Title>PoolC 소개</Title>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Body>
            <Viewer initialValue={introduction} />
          </Body>
          <Title>동아리방 위치</Title>
          <StyledImage src={getFileUrl(locationUrl)} />
        </>
      )}
    </WhiteNarrowBlock>
  );
};

export default Intro;
