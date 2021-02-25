import ActionButton from '../../../components/common/Buttons/ActionButton';
import Modal from '../../../components/common/Modal/Modal';
import React from 'react';

const RegisterModalContainer = ({ visible, onConfirm, onCancel }) => {
  const action = '확인';
  const contents = '모든 항목을 올바르게 입력해주세요.';
  const buttons = <ActionButton onClick={onConfirm}>{action}</ActionButton>;
  return (
    <Modal
      contents={contents}
      buttons={buttons}
      visible={visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default RegisterModalContainer;
