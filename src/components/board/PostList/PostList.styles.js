import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import { Link } from 'react-router-dom';

export const PostListHeader = styled.header`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 0.5rem;
  & > .post_list_title {
    display: flex;
    flex: 1;
    font-weight: 700;
  }
`;

export const PostListTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px 0 30px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`;

export const PostListHead = styled.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .post_list_head_title {
    flex: 12;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .post_list_head_author {
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post_list_head_date {
    flex: 3;
    padding: 0 10px;
    min-width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PostListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.8rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
  & > .post-list-row-title {
    display: flex;
    align-items: center;
    cursor: pointer;
    flex: 12;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.9rem;
    word-break: keep-all;
    @media (max-width: 576px) {
      flex: 15;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
  & > .post-list-row-author {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
    font-size: 0.9rem;
    @media (max-width: 576px) {
      font-size: 0.7rem;
      line-height: 0.7rem;
    }
  }
  & > .post-list-row-date {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    padding: 0 10px;
    text-align: center;
    min-width: 3rem;
    font-size: 0.9rem;
    @media (max-width: 576px) {
      flex: 2;
      font-size: 0.7rem;
      line-height: 0.7rem;
    }
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

export const Title = styled.div`
  display: flex;
`;

export const CommentCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 5px;
  color: ${colors.mint[2]};
  font-size: 0.8rem;
  font-weight: 300;
  height: 100%;
  @media (max-width: 576px) {
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
`;
