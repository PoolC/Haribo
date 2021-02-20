import React from 'react';
import styled from 'styled-components';
import BoardContent from '../../components/board/BoardContent';
import BoardMenu from '../../components/board/BoardMenu';
import { withRouter } from 'react-router-dom';

const BoardContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 50px 0;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const BoardContainer = ({ location, history }) => {
  const currentLocation = location.pathname.replace('/boards', '');
  if (location.pathname === '/boards') {
    history.push('/boards/notice');
  }
  const menus = [
    { name: '공지사항', url: '/notice' },
    { name: '학술부', url: '/study' },
    { name: '구인/홍보', url: '/recruit' },
    { name: '게임제작부', url: '/gamedev' },
  ];
  const posts = [
    {
      id: 0,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 5,
    },
    {
      id: 2,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 1,
    },
    {
      id: 3,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 0,
    },
    {
      id: 0,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 5,
    },
    {
      id: 2,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 1,
    },
    {
      id: 3,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 0,
    },
    {
      id: 0,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 5,
    },
    {
      id: 2,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 1,
    },
    {
      id: 3,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 0,
    },
    {
      id: 0,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 5,
    },
    {
      id: 2,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 1,
    },
    {
      id: 3,
      title: '게시물 제목 테스트',
      author: 'TESTER',
      date: '2021-01-28',
      commentsCount: 0,
    },
  ];
  const selectedMenu = menus[0];
  return (
    <BoardContainerBlock>
      <BoardMenu menus={menus} currentLocation={currentLocation} />
      <BoardContent selectedMenu={selectedMenu} posts={posts} />
    </BoardContainerBlock>
  );
};

export default withRouter(BoardContainer);
