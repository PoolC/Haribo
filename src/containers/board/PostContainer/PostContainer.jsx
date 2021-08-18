import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../../../components/board/Post/Post';
import * as postAPI from '../../../lib/api/post';
import * as commentAPI from '../../../lib/api/comment';
import { useSelector } from 'react-redux';
import { MENU } from '../../../constants/menus';
import { SUCCESS } from '../../../constants/statusCode';

const PostContainer = ({ selectedMenu, history, match, location }) => {
  const { postID } = match.params;
  const member = useSelector((state) => state.auth);
  const isLogin = member.status.isLogin;

  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    postAPI
      .getPost(postID)
      .then((res) => {
        if (res.status === SUCCESS.OK) {
          setPost(res.data);
          setComments(res.data.comments);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.error(e.message);
        if (!isLogin) {
          history.push(`/${MENU.SIGNIN}`);
        } else {
          history.push(`/${MENU.FORBIDDEN}`);
        }
      });
  }, [history, postID, isLogin]);

  if (post === undefined) {
    window.location.reload();
  }

  const onDeletePost = () => {
    postAPI
      .deletePost(postID)
      .then((res) => {
        if (res.status === SUCCESS.OK) {
          history.push(`/${MENU.BOARDS}/${selectedMenu.urlPath}?page=1`);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  };

  const onCreateComment = (body) => {
    commentAPI
      .createComment({ postID, body })
      .then((res) => {
        if (res.status === SUCCESS.OK) {
          setComments([...comments, res.data]);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  };

  const onDeleteComment = (commentID) => {
    commentAPI
      .deleteComment(commentID)
      .then((res) => {
        if (res.status === SUCCESS.OK) {
          setComments(
            comments.filter((comment) => comment.commentId !== commentID),
          );
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  };

  return (
    <Post
      loading={loading}
      member={member}
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
