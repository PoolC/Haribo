import React from 'react';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';
import ActionButton from '../../common/Buttons/ActionButton';
import { ButtonContainer, CommentFormBlock, StyledInput } from './CommentForm.styles';

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
