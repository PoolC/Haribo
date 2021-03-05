import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PostForm from '../../../components/board/PostForm/PostForm';
import { MENU } from '../../../constants/menus';
import * as boardAPI from '../../../lib/api/board';
import * as postAPI from '../../../lib/api/post';

const PostFormContainer = ({ match, history }) => {
  const { boardID } = match.params;
  const { postID } = match.params;
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    boardAPI.getBoard(boardID).then((res) => {
      if (res.status === 200) {
        setSelectedMenu(res.data);
      }
    });
    postAPI.getPost(postID).then((res) => {
      if (res.status === 200) {
        setPost(res.data);
      }
    });
  }, [boardID, postID]);

  if (selectedMenu == null || (postID && post === null)) {
    return null;
  }

  const onCreatePost = ({ title, body }) => {
    postAPI.createPost({ title, body, boardID }).then((res) => {
      if (res.status === 202) {
        const { postId } = res.data;
        history.push(`/${MENU.POST}/${postId}`);
      }
    });
  };

  const onUpdatePost = ({ title, body }) => {
    postAPI.updatePost({ title, body, postID }).then((res) => {
      if (res.status === 200) {
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
