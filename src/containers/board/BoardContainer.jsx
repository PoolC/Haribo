import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import BoardMenu from '../../components/board/BoardMenu/BoardMenu';
import * as boardAPI from '../../lib/api/board';
import { Route, Switch } from 'react-router-dom';
import PostListContainer from './PostListContainer/PostListContainer';
import PostFormContainer from './PostFormContainer/PostFormContainer';
import PostContainer from './PostContainer/PostContainer';
import { MENU } from '../../constants/menus';
import NotFoundPage from '../../pages/error/NotFoundPage';

const BoardContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  flex: auto;
  margin: 0px 0 300px 0;
  @media (max-width: 768px) {
    margin-bottom: 500px;
    flex-direction: column;
  }
`;

const BoardContainer = ({ match, location }) => {
  const currentLocation = match.params.urlPath;

  const [boards, setBoards] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [boardLoading, setBoardLoading] = useState(true);

  useEffect(() => {
    setBoardLoading(true);

    boardAPI.getBoards().then((res) => {
      if (res.status === 200) {
        setBoards(res.data.data);
        setBoardLoading(false);
      }
    });
  }, [match.path, location]);

  useEffect(() => {
    if (!boardLoading && currentLocation) {
      setSelectedMenu(
        ...boards.filter((board) => board.urlPath === currentLocation),
      );
    }
    // eslint-disable-next-line
  }, [currentLocation, boardLoading]);

  if (boards === null || boardLoading || selectedMenu == null) {
    return null;
  }

  return (
    <BoardContainerBlock>
      <BoardMenu
        menus={boards}
        currentLocation={currentLocation}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <Switch>
        <Route
          render={() => <PostListContainer selectedMenu={selectedMenu} />}
          path={`/${MENU.BOARDS}/:urlPath`}
          exact
        />
        <Route
          render={() => <PostFormContainer selectedMenu={selectedMenu} />}
          path={[
            `/${MENU.BOARDS}/:urlPath/${MENU.POST}/new/:boardID`,
            `/${MENU.BOARDS}/:urlPath/${MENU.POST}/:boardID/edit/:postID`,
          ]}
          exact
        />
        <Route
          render={() => <PostContainer selectedMenu={selectedMenu} />}
          path={`/${MENU.BOARDS}/:urlPath/${MENU.POST}/:postID`}
          exact
        />
        <Route component={NotFoundPage} path={`/${MENU.BOARDS}`} />
      </Switch>
    </BoardContainerBlock>
  );
};

export default withRouter(BoardContainer);
