import React from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';
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

const CommentForm = ({ onCreateComment }) => {
  const [body, onChangeBody] = useInput('', notEmptyValidation);
  const handleCreate = (e) => {
    e.preventDefault();
    onCreateComment(body);
  };
  return (
    <CommentFormBlock>
      <StyledInput
        type="text"
        placeholder="댓글을 입력하세요"
        onChange={onChangeBody}
        value={body}
      />
      <ButtonContainer>
        <ActionButton onClick={handleCreate}>작성</ActionButton>
      </ButtonContainer>
    </CommentFormBlock>
  );
};

export default CommentForm;
