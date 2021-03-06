import React from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import { CommentListBlock } from './CommentList.styles';

const CommentList = ({
  member,
  comments,
  onCreateComment,
  onDeleteComment,
}) => {
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
      <CommentForm onCreateComment={onCreateComment} />
    </CommentListBlock>
  );
};

export default CommentList;
