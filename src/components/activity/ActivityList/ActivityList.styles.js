import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const ActivityListBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
`;

export const List = styled.ul`
  width: 95%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
`;

export const ActivityListContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 0px 0px 40px 0px;
`;

export const ActivityListTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const ActivityListHeader = styled.header`
  display: flex;
  width: 83%;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 40px 0 10px 0;
`;

export const Description = styled.div`
  display: flex;
  width: 83%;
  margin: 0px 0 40px 0;
  font-size: 0.8rem;
  color: ${colors.brown[0]};
  word-break: keep-all;
  line-height: 1.2rem;
  @media (max-width: 576px) {
    text-align: center;
  }
`;