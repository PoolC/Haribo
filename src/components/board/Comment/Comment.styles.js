import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

export const CommentBlock = styled.div `
  display: flex;
  width: 100%;
  padding: 8px 0;
  cursor: default;
  transition: 0.25s ease-in;
  &:hover {
    background-color: ${colors.gray[1]};
    transition: 0.25s ease-in;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Author = styled.div `
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  min-width: 4rem;
  padding-left: 0.5rem;
`;

export const Body = styled.div `
  display: flex;
  flex: 1;
  font-size: 0.9rem;
  align-items: center;
  word-break: break-all;
  line-height: 1.2rem;
  @media (max-width: 576px) {
    margin: 0.5rem 0;
    padding-left: 0.5rem;
  }
`;

export const Button = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 3rem;
  & > button {
    margin: 0;
    background-color: ${colors.red[1]};
    &:hover {
      background-color: ${colors.red[0]};
    }
  }
  @media (max-width: 576px) {
    flex: 1;
  }
`;

export const Date = styled.div `
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  font-size: 0.8rem;
  padding-right: 0.5rem;
  @media (max-width: 576px) {
    justify-content: start;
  }
`;

export const DateButtonConatiner = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 300;
  font-size: 0.8rem;
  min-width: 8rem;
  padding-right: 0.5rem;
  @media (max-width: 576px) {
    justify-content: space-between;
    padding-left: 0.5rem;
  }
`;