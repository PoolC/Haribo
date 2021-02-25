import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const RegisterSuccessBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 140px 40px 160px 40px;
  text-align: center;
  font-size: 0.9rem;
  line-height: 2rem;
  font-weight: 500;
`;

const RegisterSuccess = () => {
  return (
    <RegisterSuccessBlock>
      <FormContainer>
        <h2>회원가입 요청 완료</h2>
        <br />
        회원가입 요청이 전송되었습니다.
        <br />
        관리자가 승인해야 회원가입이 완료됩니다.
        <br />
        관리자의 승인을 기다려주세요.
      </FormContainer>
    </RegisterSuccessBlock>
  );
};

export default RegisterSuccess;
