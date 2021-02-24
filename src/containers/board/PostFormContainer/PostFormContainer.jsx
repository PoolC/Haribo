import React from 'react';
import styled from 'styled-components';
import BoardMenu from '../../../components/board/BoardMenu/BoardMenu';
import PostForm from '../../../components/board/PostForm/PostForm';

const ContainerBlock = styled.div`
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

const PostFormContainer = () => {
  const menus = [
    { name: '공지사항', url: '/notice' },
    { name: '학술부', url: '/study' },
    { name: '구인/홍보', url: '/recruit' },
    { name: '게임제작부', url: '/gamedev' },
  ];
  return (
    <ContainerBlock>
      <BoardMenu menus={menus} />
      <PostForm />
    </ContainerBlock>
  );
};

export default PostFormContainer;
