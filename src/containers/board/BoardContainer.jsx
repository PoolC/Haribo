import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BoardMenu from '../../components/board/BoardMenu/BoardMenu';
import BoardContent from '../../components/board/BoardContent/BoardContent';
import * as boardAPI from '../../lib/api/board';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PostWritePage from '../../pages/post/PostWritePage';
import PostPage from '../../pages/post/PostPage';
import { MENU } from '../../constants/menus';

const BoardContainerBlock = styled.div`
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

const BoardContainer = ({ location, history, match }) => {
  const currentLocation = match.params.urlPath;
  const member = useSelector((state) => state.auth);

  const [boards, setBoards] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [posts, setPosts] = useState([]);

  if (!currentLocation) {
    history.push('/boards/notice');
  }

  useEffect(() => {
    // (async () => {
    //   const response = await boardAPI.getBoards();
    //   setBoards(response.data.data);
    // })();
    boardAPI.getBoards().then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setBoards(res.data.data);
        setSelectedMenu(res.data.data[0]);
      }
    });
  }, []);

  if (boards === null || selectedMenu == null) {
    return null;
  }

  return (
    <BoardContainerBlock>
      <BoardMenu
        menus={boards}
        currentLocation={currentLocation}
        setSelectedMenu={setSelectedMenu}
      />
      <BoardContent posts={posts} member={member} selectedMenu={selectedMenu} />
    </BoardContainerBlock>
  );
};

export default withRouter(BoardContainer);
