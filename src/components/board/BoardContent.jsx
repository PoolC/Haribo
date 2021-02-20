import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const BoardContentBlock = styled.div`
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

const PostListTable = styled.table`
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

const PostListHead = styled.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  & > .post_list_head_title {
    flex: 4;
    padding: 0 10px;
  }
  & > .post_list_head_author {
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
  }
  .post_list_head_date {
    flex: 1;
    padding: 0 10px;
  }
`;

const PostListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 1rem 0;
  transition: 0.3s;
  & > .post-list-row-title {
    cursor: pointer;
    flex: 4;
    padding: 0 10px;
    & > .post_list_row_comment_count {
      color: ${colors.brown[0]};
      font-size: 0.8rem;
      padding: 0 5px;
    }
  }
  & > .post-list-row-author {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
  }
  & > .post-list-row-date {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

const PageList = styled.ul`
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

const BoardContent = ({ selectedMenu, posts }) => {
  return (
    <BoardContentBlock>
      <header className="post_list_header">
        <h2 className="post_list_title">{selectedMenu.name}</h2>
        <button className="create_post_button">글쓰기</button>
      </header>
      <PostListTable>
        <thead>
          <PostListHead>
            <th className="post_list_head_title">제목</th>
            <th className="post_list_head_author">작성자</th>
            <th className="post_list_head_date">작성일</th>
          </PostListHead>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostListRow key={post.id}>
              <td className="post-list-row-title">
                {post.title}
                <span className="post_list_row_comment_count">
                  {post.commentsCount} comments
                </span>
              </td>
              <td className="post-list-row-author">{post.author}</td>
              <td className="post-list-row-date">{post.date}</td>
            </PostListRow>
          ))}
        </tbody>
      </PostListTable>
      <PageList>
        <li className="page_item page_selected">1</li>
        <li className="page_item">2</li>
        <li className="page_item">3</li>
      </PageList>
    </BoardContentBlock>
  );
};

export default BoardContent;
