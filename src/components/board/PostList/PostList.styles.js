import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import { Link } from 'react-router-dom';

export const PostListBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 40px;
  & > .post_list_header {
    display: flex;
    align-items: center;
    width: 100%;
    & > .post_list_title {
      display: flex;
      flex: 1;
      font-weight: 700;
    }
    & > .create_post_button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 2rem;
      background-color: ${colors.mint[1]};
      color: ${colors.gray[0]};
      border-radius: 12px;
      font-weight: 600;
      transition: 0.3s;
      &:hover {
        background-color: ${colors.mint[2]};
        transition: 0.3s;
      }
    }
  }
`;

export const PostListTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
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
  padding: 1rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .post-list-row-title {
    display: flex;
    align-items: center;
    cursor: pointer;
    flex: 12;
    font-weight: 500;
    padding: 0 10px;
    line-height: 1.5rem;
    & > .post_list_row_comment_count {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 5px;
      color: ${colors.mint[2]};
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
  & > .post-list-row-author {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
  }
  & > .post-list-row-date {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    padding: 0 10px;
    text-align: center;
    min-width: 3rem;
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

export const PageList = styled.ul`
  display: flex;
  & > .page_item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 5px;
    color: ${colors.brown[0]};
    width: 24px;
    height: 24px;
    cursor: pointer;
    &:hover {
      color: ${colors.brown[1]};
    }
  }
  & > .page_selected {
    color: ${colors.brown[1]};
  }
`;

export const StyledLink = styled(Link)`
  color: ${colors.brown[1]};
`;