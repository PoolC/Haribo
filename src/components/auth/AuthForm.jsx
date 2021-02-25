import React, { useState } from 'react';
import RegisterModalContainer from '../../containers/auth/RegisterModalContainer/RegisterModalContainer';
import ModalContainer from '../../containers/common/ModalContainer';
import useInput from '../../hooks/useInput';
import {
  emailValidation,
  idValidation,
  notEmptyValidation,
  passwordValidation,
  phoneNumberValidation,
} from '../../lib/utils/validation';
import {
  AuthFormBlock,
  FormContainer,
  FormList,
  FormListHeader,
  SubmitButton,
  StyledInput,
  Warning,
  StyledTextarea,
} from './AuthForm.styles';

const textMap = {
  login: '로그인',
  register: '회원가입',
  update: '회원 정보 수정',
};

const Input = ({
  labelText,
  typeText,
  nameText,
  error,
  onChangeFunc,
  placeholderText,
  disabledCondition,
}) => {
  const errorMessage = '형식이 올바르지 않습니다.';
  return (
    <>
      <label htmlFor={nameText}>
        {labelText}
        <Warning error={error}>{errorMessage}</Warning>
      </label>
      <StyledInput
        type={typeText}
        name={nameText}
        id={nameText}
        disabled={disabledCondition}
        error={error}
        onChange={onChangeFunc}
        placeholder={placeholderText}
      />
    </>
  );
};

const AuthForm = ({ type, onSubmit }) => {
  const headerText = textMap[type];

  const [id, onChangeId, idError] = useInput('', idValidation);
  const [password, onChangePassword, passwordError] = useInput(
    '',
    passwordValidation,
  );
  const [name, onChangeName, nameError] = useInput('', notEmptyValidation);
  const [email, onChangeEmail, emailError] = useInput('', emailValidation);
  const [phoneNumber, onChangePhoneNumber, phoneNumberError] = useInput(
    '',
    phoneNumberValidation,
  );
  const [department, onChangeDepartment, departmentError] = useInput(
    '',
    notEmptyValidation,
  );
  const [studentId, onChangeStudentId, studentIdError] = useInput(
    '',
    notEmptyValidation,
  );
  const [introduction, onChangeIntroduction, introductionError] = useInput(
    '',
    notEmptyValidation,
  );

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordError] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handlePasswordCheckError = (input) => {
    if (password !== input) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
    handlePasswordCheckError(e.target.value);
  };

  const registerValidation = () => {
    return !(
      idError ||
      !id ||
      passwordError ||
      !password ||
      passwordCheckError ||
      !passwordCheck ||
      nameError ||
      !name ||
      emailError ||
      !email ||
      phoneNumberError ||
      !phoneNumber ||
      departmentError ||
      !department ||
      studentIdError ||
      !studentId ||
      introductionError ||
      !introduction
    );
  };

  const updateValidation = () => {
    return !(emailError || !email || phoneNumberError || !phoneNumber);
  };

  const loginValidation = () => {
    return !(idError || !id || passwordError || !password);
  };

  const handleLogin = () => {
    if (!loginValidation()) {
      handleModalOpen();
      return;
    }
    onSubmit();
  };

  const handleRegister = () => {
    if (!registerValidation()) {
      handleModalOpen();
      return;
    }
    onSubmit();
  };

  const handleUpdate = () => {
    if (!updateValidation()) {
      handleModalOpen();
      return;
    }
    onSubmit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'login') {
      handleLogin();
    }
    if (type === 'register') {
      handleRegister();
    }
    if (type === 'update') {
      handleUpdate();
    }
  };

  return (
    <>
      <RegisterModalContainer
        visible={modalVisible}
        onConfirm={handleModalClose}
        onCancel={handleModalClose}
      />
      <AuthFormBlock>
        <FormContainer>
          <FormListHeader>
            <h2 className="form_list_title">{headerText}</h2>
          </FormListHeader>
          <FormList onSubmit={handleSubmit}>
            <Input
              labelText="아이디"
              typeText="text"
              nameText="id"
              error={idError}
              disabledCondition={type === 'update'}
              onChangeFunc={onChangeId}
              placeholderText="영/숫자 4~12자리"
            />
            <Input
              labelText="비밀번호"
              typeText="password"
              nameText="password"
              error={passwordError}
              onChangeFunc={onChangePassword}
              placeholderText="8자리 이상"
            />
            {type === 'register' && (
              <Input
                labelText="비밀번호 확인"
                typeText="password"
                nameText="password_check"
                error={passwordCheckError}
                onChangeFunc={onChangePasswordCheck}
                placeholderText="8자리 이상"
              />
            )}
            {type !== 'login' && (
              <>
                <Input
                  labelText="이름"
                  typeText="text"
                  nameText="name"
                  error={nameError}
                  disabledCondition={type === 'update'}
                  onChangeFunc={onChangeName}
                  placeholderText="ex) 김풀씨"
                />
                <Input
                  labelText="이메일"
                  typeText="email"
                  nameText="email"
                  error={emailError}
                  onChangeFunc={onChangeEmail}
                  placeholderText="ex) email@example.com"
                />
                <Input
                  labelText="전화번호"
                  typeText="tel"
                  nameText="phoneNumber"
                  error={phoneNumberError}
                  onChangeFunc={onChangePhoneNumber}
                  placeholderText="ex) 010-0000-0000"
                />
                <Input
                  labelText="소속 학과"
                  typeText="text"
                  nameText="department"
                  error={departmentError}
                  onChangeFunc={onChangeDepartment}
                  disabledCondition={type === 'update'}
                  placeholderText="ex) 컴퓨터과학과"
                />
                <Input
                  labelText="학번"
                  typeText="text"
                  nameText="studentId"
                  error={studentIdError}
                  onChangeFunc={onChangeStudentId}
                  disabledCondition={type === 'update'}
                  placeholderText="ex) 2021000000"
                />
                <label htmlFor="introduction">자기소개</label>
                <StyledTextarea
                  name="introduction"
                  id="introduction"
                  cols="30"
                  rows="5"
                  onChange={onChangeIntroduction}
                  placeholder="자기 소개를 적어주세요"
                />
              </>
            )}
            <SubmitButton>{headerText}</SubmitButton>
          </FormList>
        </FormContainer>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
