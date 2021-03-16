import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../../../components/board/Post/Post';
import * as postAPI from '../../../lib/api/post';
import * as commentAPI from '../../../lib/api/comment';
import { useSelector } from 'react-redux';
import { MENU } from '../../../constants/menus';
import Spinner from '../../../components/common/Spinner/Spinner';

const PostContainer = ({ selectedMenu, history, match, location }) => {
  const { postID } = match.params;
  const member = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    postAPI
      .getPost(postID)
      .then((res) => {
        if (res.status === 200) {
          setPost(res.data);
          setComments(res.data.comments);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  }, [history, postID]);

  if (post === undefined) {
    window.location.reload();
  }

  const onDeletePost = () => {
    postAPI
      .deletePost(postID)
      .then((res) => {
        if (res.status === 200) {
          history.goBack(1);
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
        if (res.status === 202) {
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
        if (res.status === 200) {
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
    <>
      {loading && <Spinner />}
      {!loading && (
        <Post
          member={member}
          post={post}
          comments={comments}
          selectedMenu={selectedMenu}
          onDeletePost={onDeletePost}
          onCreateComment={onCreateComment}
          onDeleteComment={onDeleteComment}
        />
      )}
    </>
  );
};

export default withRouter(PostContainer);
