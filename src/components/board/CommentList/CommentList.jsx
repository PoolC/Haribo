import React from 'react';
import styled from 'styled-components';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const CommentListBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  width: 100%;
`;

const CommentList = ({
  comments,
  postId,
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
