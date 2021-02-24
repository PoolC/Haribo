import ActionButton from '../../../components/common/Buttons/ActionButton';
import Modal from '../../../components/common/Modal/Modal';
import React from 'react';

const BookModalContainer = ({ bookTitle, status }) => {
  const action = status === 'available' ? '대출' : '반납';
  const contents = `${bookTitle}를 ${action}하시겠습니까?`;
  const buttons = <ActionButton>{action}</ActionButton>;
  return <Modal contents={contents} buttons={buttons} />;
};

export default BookModalContainer;
