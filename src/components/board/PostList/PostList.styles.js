import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import { Link } from 'react-router-dom';

export const PostListHeader = styled.header `
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

export const PostListTable = styled.table `
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px 0 30px 0;
  border-collapse: collapse;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`;

export const PostListHead = styled.tr `
  position: relative;
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .post_list_head_title {
    padding: 0 11rem;
    display: flex;
    width: 100%;
    margin-right: 11rem;
    align-items: center;
    justify-content: center;
    word-break: keep-all;
  }
  & > .post_list_head_author {
    position: absolute;
    right: 7rem;
    width: 4rem;
    min-width: 4rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .post_list_head_date {
    position: absolute;
    right: 0rem;
    width: 5rem;
    min-width: 5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .hide {
    @media (max-width: 768px) {
      display: none;
    }
  }
  & > .post_list_head {
    flex: 12;
    padding: 0 10px;
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const NewIcon = styled.span `
  background-color: ${colors.red[0]};
  opacity: 0.8;
  color: white;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  height: 1rem;
  min-height: 1rem;
  max-height: 1rem;
  margin-left: 5px;
  width: 1rem;
  min-width: 1rem;
  max-width: 1rem;
  @media (max-width: 768px) {
    height: 0.8rem;
    min-height: 0.8rem;
    max-height: 0.8rem;
    margin-left: 5px;
    width: 0.8rem;
    min-width: 0.8rem;
    max-width: 0.8rem;
  }
`;

// eslint-disable-next-line
export const StyledTitleLink = styled(Link)
`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.brown[1]};
`;

export const PostListRow = styled.tr `
  position: relative;
  cursor: default;
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  transition: 0.3s;
  border-bottom: 1px solid ${colors.mint[0]};
  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 0.7rem;
    flex-direction: column;
  }
  & > .post-list-row-title {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: calc(100% - 13rem);
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.9rem;
    @media (max-width: 768px) {
      padding: 0 1rem;
      font-size: 0.8rem;
      line-height: 1.2rem;
      font-weight: 500;
      width: 95%;
    }
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

export const WriterIcon = styled.i `
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const DateIcon = styled.i `
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const SubInfoContainer = styled.td `
  display: flex;
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    position: static;
    color: ${colors.brown[0]};
    width: 100%;
    flex: 1;
    font-size: 0.6rem;
    line-height: 0.6rem;
    justify-content: space-between;
    padding: 1rem 0 0 0;
  }
`;

export const PostListRowAuthor = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  min-width: 4rem;
  font-size: 0.9rem;
  width: 4rem;
  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
`;

export const PostListRowDate = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
  min-width: 5rem;
  font-size: 0.9rem;
  width: 5rem;
  @media (max-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-size: 0.7rem;
    line-height: 0.7rem;
  }
`;

export const Title = styled.div `
  display: flex;
`;

export const CommentCount = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 5px;
  color: ${colors.mint[2]};
  font-size: 0.8rem;
  font-weight: 300;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

// eslint-disable-next-line
export const StyledLink = styled(Link)
`
  color: ${colors.brown[1]};
`;

export const MemberName = styled.p `
  color: ${colors.brown[1]};
  transition: 0.25s ease-in;
  &:hover {
    text-decoration: none;
    color: ${colors.brown[0]};
    transition: 0.25s ease-in;
  }
`;