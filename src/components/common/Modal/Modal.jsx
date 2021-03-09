import React, { useEffect, useState } from 'react';
import {
  ModalBlock,
  ModalContainer,
  HeaderBar,
  ContentContainer,
  ButtonContainer,
} from './Modal.styles.js';

const Modal = ({ contents, buttons, visible, onConfirm, onCancel }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <ModalBlock disappear={!visible}>
      <ModalContainer disappear={!visible}>
        <HeaderBar>
          <i className="fas fa-times" onClick={onCancel}></i>
        </HeaderBar>
        <ContentContainer>{contents}</ContentContainer>
        <ButtonContainer>{buttons}</ButtonContainer>
      </ModalContainer>
    </ModalBlock>
  );
};

export default Modal;
