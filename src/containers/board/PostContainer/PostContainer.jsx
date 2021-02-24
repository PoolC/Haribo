import React from 'react';
import styled from 'styled-components';
import BoardMenu from '../../../components/board/BoardMenu/BoardMenu';
import Post from '../../../components/board/Post/Post';

const PostContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 600px;
    flex-direction: column;
  }
`;

const PostContainer = () => {
  const menus = [
    { name: '공지사항', url: '/notice' },
    { name: '학술부', url: '/study' },
    { name: '구인/홍보', url: '/recruit' },
    { name: '게임제작부', url: '/gamedev' },
  ];

  const post = {
    id: 0,
    title: '제목 테스트',
    body: '~~paragraph~~ with *emphasis* and **strong importance**',
    author: '김민지',
    createdAt: '2021-02-02 10:00:00',
    comments: [
      {
        id: 0,
        author: '김풀씨0',
        body: '댓글 테스트',
        createdAt: '2021-02-03 11:11:11',
      },
      {
        id: 1,
        author: '김풀씨1',
        body:
          '댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트댓글 테스트',
        createdAt: '2021-02-03 11:11:11',
      },
      {
        id: 2,
        author: '김풀씨2',
        body: '댓글 테스트',
        createdAt: '2021-02-03 11:11:11',
      },
    ],
  };

  return (
    <PostContainerBlock>
      <BoardMenu menus={menus} />
      <Post post={post} />
    </PostContainerBlock>
  );
};

export default PostContainer;
