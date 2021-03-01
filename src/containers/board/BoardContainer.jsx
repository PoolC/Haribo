import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BoardMenu from '../../components/board/BoardMenu/BoardMenu';
import BoardContent from '../../components/board/BoardContent/BoardContent';
import * as boardAPI from '../../lib/api/board';

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
  const initialSelectedMenu = match.params.urlPath;

  const [selectedMenu, setSelectedMenu] = useState(initialSelectedMenu);
  const [boards, setBoards] = useState(null);
  const [posts, setPosts] = useState([]);

  if (!initialSelectedMenu) {
    history.push('/boards/notice');
  }

  useEffect(() => {
    (async () => {
      const response = await boardAPI.getBoards();
      setBoards(response.data.data);
    })();
  }, []);

  if (boards === null) {
    return null;
  }

  const onSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <BoardContainerBlock>
      <BoardMenu
        menus={boards}
        currentLocation={selectedMenu}
        onSelectMenu={onSelectMenu}
      />
      <BoardContent selectedMenu={selectedMenu} posts={posts} />
    </BoardContainerBlock>
  );
};

export default withRouter(BoardContainer);
