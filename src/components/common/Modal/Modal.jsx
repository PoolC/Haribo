import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

const ModalBlock = styled.div`
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray[0]};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: 200px;
  border-radius: 20px;
`;

const HeaderBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.mint[0]};
  width: 300px;
  height: 35px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  & > .fa-times {
    cursor: pointer;
    margin-right: 15px;
    color: ${colors.brown[0]};
    transition: 0.3s ease-in;
    &:hover {
      color: ${colors.brown[1]};
      transition: 0.3s ease-in;
    }
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 2;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ contents, buttons }) => {
  return (
    <ModalBlock>
      <ModalContainer>
        <HeaderBar>
          <i class="fas fa-times"></i>
        </HeaderBar>
        <ContentContainer>{contents}</ContentContainer>
        <ButtonContainer>{buttons}</ButtonContainer>
      </ModalContainer>
    </ModalBlock>
  );
};

export default Modal;
