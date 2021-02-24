import Modal from '../../../components/common/Modal/Modal';
import React from './react';

const ActivityModalContainer = ({ activityTitle }) => {
  const contents = `${activityTitle}를 신청하시겠습니까?`;
  const buttons = <ActionButton>신청</ActionButton>;
  return <Modal contents={contents} buttons={buttons} />;
};

export default ActivityModalContainer;
