import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const CommentBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  &:hover {
    background-color: ${colors.gray[1]};
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 5rem;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  font-size: 0.9rem;
  align-items: center;
  word-break: keep-all;
  line-height: 1.2rem;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 3rem;
  & > button {
    margin: 0;
    background-color: ${colors.red[0]};
    &:hover {
      background-color: ${colors.red[1]};
    }
  }
`;

const Comment = ({ comment }) => {
  const { id, author, body, createdAt } = comment;
  return (
    <CommentBlock>
      <Author>{author}</Author>
      <Body>{body}</Body>
      <Button>
        <ActionButton>삭제</ActionButton>
      </Button>
    </CommentBlock>
  );
};

export default Comment;
