import React, { useState } from 'react';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';
import ActionButton from '../../common/Buttons/ActionButton';
import Modal from '../../common/Modal/Modal';
import {
  ButtonContainer,
  CommentFormBlock,
  StyledInput,
} from './CommentForm.styles';

const CommentForm = ({ onCreateComment }) => {
  const [body, onChangeBody] = useInput('', notEmptyValidation);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!body) {
      setErrorMessage('내용을 입력하세요.');
      onShowErrorModal();
      return;
    }
    onCreateComment(body);
    e.target.value = '';
    onChangeBody(e);
  };

  const onShowErrorModal = () => {
    setErrorModalVisible(true);
  };

  const onCloseErrorModal = (e) => {
    e.preventDefault();
    setErrorModalVisible(false);
  };

  const buttons = <ActionButton onClick={onCloseErrorModal}>확인</ActionButton>;

  return (
    <>
      <Modal
        contents={errorMessage}
        buttons={buttons}
        visible={errorModalVisible}
        onConfirm={onCloseErrorModal}
        onCancel={onCloseErrorModal}
      />
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
    </>
  );
};

export default CommentForm;
