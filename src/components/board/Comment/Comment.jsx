import React from 'react';
import ActionButton from '../../common/Buttons/ActionButton';
import {
  Author,
  Body,
  Button,
  CommentBlock,
  Date,
  DateButtonConatiner,
} from './Comment.styles';
import { getFullCurrentDateTimeString } from '../../../lib/utils/getDateString';

const Comment = ({ member, comment, onDeleteComment }) => {
  const {
    user: { memberId, isAdmin },
  } = member;

  const { body, commentId, createdAt, writerLoginId, writerName } = comment;

  const handleDelete = (e) => {
    e.preventDefault();
    onDeleteComment(commentId);
  };

  return (
    <CommentBlock>
      <Author>{writerName}</Author>
      <Body>{body}</Body>
      <DateButtonConatiner>
        <Date>{getFullCurrentDateTimeString(createdAt)}</Date>
        {(writerLoginId === memberId || isAdmin) && (
          <Button>
            <ActionButton onClick={handleDelete}>삭제</ActionButton>
          </Button>
        )}
      </DateButtonConatiner>
    </CommentBlock>
  );
};

export default Comment;
