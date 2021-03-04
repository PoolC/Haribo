import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import BoardMenu from '../../../components/board/BoardMenu/BoardMenu';
import PostForm from '../../../components/board/PostForm/PostForm';
import { MENU } from '../../../constants/menus';
import * as boardAPI from '../../../lib/api/board';
import * as postAPI from '../../../lib/api/post';

const PostFormContainer = ({ match, history }) => {
  console.log(match);
  const { boardID } = match.params;
  const { postID } = match.params;
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    boardAPI.getBoard(boardID).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setSelectedMenu(res.data);
      }
    });
    postAPI.getPost(postID).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setPost(res.data);
      }
    });
  }, [boardID, postID]);

  if (selectedMenu == null || (postID && post === null)) {
    return null;
  }

  const onCreatePost = ({ title, body }) => {
    console.log({ title, body, boardID });
    postAPI.createPost({ title, body, boardID }).then((res) => {
      if (res.status === 202) {
        console.log(res.data);
        history.push(`/${MENU.BOARDS}/${selectedMenu.name}`);
      }
    });
  };

  const onUpdatePost = ({ title, body }) => {
    console.log('update');
    console.log({ title, body, postID });
    postAPI.updatePost({ title, body, postID }).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        history.push(`/${MENU.POST}/${postID}`);
      }
    });
  };

  return (
    <PostForm
      post={post}
      selectedMenu={selectedMenu}
      onCreatePost={onCreatePost}
      onUpdatePost={onUpdatePost}
    />
  );
};

export default withRouter(PostFormContainer);
