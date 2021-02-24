import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const CommentFormBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 0 0;
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  height: 2rem;
  outline: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 4rem;
  justify-content: flex-end;
  & > button {
    margin: 0;
  }
`;

const CommentForm = () => {
  return (
    <CommentFormBlock>
      <StyledInput type="text" placeholder="댓글을 입력하세요" />
      <ButtonContainer>
        <ActionButton>작성</ActionButton>
      </ButtonContainer>
    </CommentFormBlock>
  );
};

export default CommentForm;
