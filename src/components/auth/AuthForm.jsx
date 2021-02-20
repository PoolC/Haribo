import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';

const AuthFormBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 50px 0;
`;

const FormContainer = styled.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
  min-height: 60vh;
`;

const FormListHeader = styled.header`
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

const FormList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  & > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0 8px 0;
    font-size: 0.8rem;
    width: 100%;
  }
  & > input {
    border: 1px solid ${colors.brown[0]};
    height: 2rem;
    border-radius: 2px;
    margin-bottom: 8px;
    width: 100%;
    max-width: 320px;
    outline: ${colors.gray[1]};
  }
  & > input:disabled {
    background-color: ${colors.gray[1]};
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  margin: 40px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  height: 2rem;
  background-color: ${colors.mint[1]};
  color: white;
  border-radius: 12px;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.mint[2]};
    transition: 0.3s;
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
  update: '회원 정보 수정',
};

const AuthForm = ({ type }) => {
  const headerText = textMap[type];
  return (
    <AuthFormBlock>
      <FormContainer>
        <FormListHeader>
          <h2 className="form_list_title">{headerText}</h2>
        </FormListHeader>
        <FormList>
          <label htmlFor="id">
            아이디
            <span className="form_warning form_warning_id">
              형식이 올바르지 않습니다.
            </span>
          </label>
          <input
            type="text"
            name="id"
            id="id"
            disabled={type === 'update'}
            className="id_form member_form inavailable_input"
          />
          <label htmlFor="password">
            비밀번호
            <span className="form_warning form_warning_password">
              형식이 올바르지 않습니다.
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="password_form member_form"
          />
          {type === 'register' && (
            <>
              <label htmlFor="password">
                비밀번호 확인
                <span className="form_warning form_warning_password_check">
                  형식이 올바르지 않습니다.
                </span>
              </label>
              <input
                type="password"
                name="password_check"
                id="password_check"
                className="password_check_form member_form"
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                name="name"
                id="name"
                className="name_form member_form"
                disabled={type === 'update'}
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="email">
                이메일
                <span className="form_warning form_warning_email">
                  형식이 올바르지 않습니다.
                </span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="email_form member_form"
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="phone">
                전화번호
                <span className="form_warning form_warning_phone">
                  형식이 올바르지 않습니다.
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="phone_form member_form"
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="major">소속 학과</label>
              <input
                type="text"
                name="major"
                id="major"
                className="major_form member_form"
                disabled={type === 'update'}
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="student_number">
                학번
                <span className="form_warning form_warning_student_number">
                  형식이 올바르지 않습니다.
                </span>
              </label>
              <input
                type="text"
                name="student_number"
                id="student_number"
                className="student_number_form member_form"
                disabled={type === 'update'}
              />
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="profile">프로필 이미지</label>
            </>
          )}
          {type !== 'login' && (
            <>
              <label htmlFor="intro">자기소개</label>
              <textarea
                name="intro"
                id="intro"
                cols="30"
                rows="5"
                className="intro_form member_form"
              ></textarea>
            </>
          )}
        </FormList>
        <SubmitButton>{headerText}</SubmitButton>
      </FormContainer>
    </AuthFormBlock>
  );
};

export default AuthForm;
