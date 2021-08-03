import React from 'react';
import { isAuthorizedRole } from '../../../lib/utils/checkRole';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import { CommentListBlock } from './CommentList.styles';

const CommentList = ({
  member,
  comments,
  onCreateComment,
  onDeleteComment,
}) => {
  const {
    status: { isLogin },
    user: { role },
  } = member;

  return (
    <CommentListBlock>
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          comment={comment}
          member={member}
          onDeleteComment={onDeleteComment}
        />
      ))}
      {isLogin && isAuthorizedRole(role) && (
        <CommentForm onCreateComment={onCreateComment} />
      )}
    </CommentListBlock>
  );
};

export default CommentList;
