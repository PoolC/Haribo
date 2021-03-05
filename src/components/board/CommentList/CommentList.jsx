import React from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import { CommentListBlock } from './CommentList.styles';

const CommentList = ({
  comments,
  onCreateComment,
  onDeleteComment,
}) => {
  return (
    <CommentListBlock>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDeleteComment={onDeleteComment}
        />
      ))}
      <CommentForm onCreateComment={onCreateComment} />
    </CommentListBlock>
  );
};

export default CommentList;
