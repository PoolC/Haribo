import ActionButton from '../../../components/common/Buttons/ActionButton';
import Modal from '../../../components/common/Modal/Modal';
import React from 'react';

const ActivityModalContainer = ({
  activityTitle,
  visible,
  onConfirm,
  onCancel,
}) => {
  const contents = `'${activityTitle}'를(을) 신청하시겠습니까?`;
  const buttons = <ActionButton onClick={onConfirm}>신청</ActionButton>;
  return (
    <Modal
      contents={contents}
      buttons={buttons}
      onCancel={onCancel}
      visible={visible}
    />
  );
};

export default ActivityModalContainer;
