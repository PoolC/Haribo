import React from 'react';
import { getFullCurrentDateString } from '../../../lib/utils/getDateString';
import ActionButton from '../../common/Buttons/ActionButton';
import { Author, Body, Button, CommentBlock, Date, DateButtonConatiner } from './Comment.styles';

const Comment = ({ comment, onDeleteComment }) => {
  const { commentId, memberName, body, createdAt } = comment;

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteComment(commentId);
  };

  return (
    <CommentBlock>
      <Author>{memberName}</Author>
      <Body>{body}</Body>
      <DateButtonConatiner>
        <Date>{getFullCurrentDateString(createdAt)}</Date>
        <Button>
          <ActionButton onClick={handleDelete}>삭제</ActionButton>
        </Button>
      </DateButtonConatiner>
    </CommentBlock>
  );
};

export default Comment;
