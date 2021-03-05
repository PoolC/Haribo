import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const List = styled.ul`
  width: 95%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`;

export const ActivityListTitle = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const ActivityListHeader = styled.header`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 0 10px 0;
`;

export const Description = styled.div`
  display: flex;
  width: 90%;
  margin: 0px 0 40px 0;
  font-size: 0.8rem;
  color: ${colors.brown[0]};
  word-break: keep-all;
  line-height: 1.2rem;
  @media (max-width: 576px) {
    text-align: center;
  }
`;
