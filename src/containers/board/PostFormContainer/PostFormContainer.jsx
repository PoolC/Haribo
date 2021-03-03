import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BoardMenu from '../../../components/board/BoardMenu/BoardMenu';
import PostForm from '../../../components/board/PostForm/PostForm';
import * as boardAPI from '../../../lib/api/board';

const PostFormContainer = ({ match, history }) => {
  console.log(match.params.boardID);
  const { boardID } = match.params;
  const { postID } = match.params;
  const [boards, setBoards] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    boardAPI.getBoard(boardID).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setSelectedMenu(res.data);
      }
    });
    boardAPI.getBoards().then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setBoards(res.data.data);
      }
    });
  }, [boardID]);

  if (boards === null || selectedMenu == null) {
    return null;
  }

  const onCreatePost = ({ title, body }) => {
    console.log({ title, body, boardID });
  };

  const onUpdatePost = ({ title, body }) => {
    console.log({ title, body, postID });
  };

  return (
    <PostForm
      selectedMenu={selectedMenu.name}
      onCreatePost={onCreatePost}
      onUpdatePost={onUpdatePost}
    />
  );
};

export default withRouter(PostFormContainer);
