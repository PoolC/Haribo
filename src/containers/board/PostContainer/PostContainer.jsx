import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../../../components/board/Post/Post';
import * as postAPI from '../../../lib/api/post';
import * as commentAPI from '../../../lib/api/comment';
import { set } from '../../../../node_modules/stylis/stylis';

const PostContainer = ({ selectedMenu, history, match }) => {
  const { postID } = match.params;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    postAPI.getPost(postID).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setPost(res.data);
        setComments(res.data.comments);
      }
    });
  }, [postID]);

  if (post === null || comments === null) {
    return null;
  }

  const onDeletePost = () => {
    postAPI.deletePost(postID).then((res) => {
      console.log(res);
      if (res.status === 200) {
        history.goBack(1);
      }
    });
  };

  const onCreateComment = (body) => {
    commentAPI.createComment({ postID, body }).then((res) => {
      console.log(res);
      if (res.status === 200) {
      }
    });
  };

  const onDeleteComment = (commentID) => {
    commentAPI.deleteComment(commentID).then((res) => {
      console.log(res);
      if (res.status === 200) {
      }
    });
  };

  return (
    <Post
      post={post}
      comments={comments}
      selectedMenu={selectedMenu}
      onDeletePost={onDeletePost}
      onCreateComment={onCreateComment}
      onDeleteComment={onDeleteComment}
    />
  );
};

export default withRouter(PostContainer);
