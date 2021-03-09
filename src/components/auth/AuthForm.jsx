import React, { useState } from 'react';
import RegisterModalContainer from '../../containers/auth/RegisterModalContainer/RegisterModalContainer';
import useFileInput from '../../hooks/useFileInput';
import useInput from '../../hooks/useInput';
import {
  emailValidation,
  idValidation,
  notEmptyValidation,
  passwordValidation,
  phoneNumberValidation,
} from '../../lib/utils/validation';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import {
  ImageContainer,
  ImageContainerHeader,
  StyledImage,
} from '../admin/AdminInfo/AdminInfo.styles';
import FileUploadButton from '../common/Buttons/FileUploadButton';
import {
  FormList,
  FormListHeader,
  SubmitButton,
  StyledInput,
  Warning,
  StyledTextarea,
  StyledLabel,
} from './AuthForm.styles';

const textMap = {
  login: '로그인',
  register: '회원가입',
  update: '회원 정보 수정',
};

const Input = ({
  valueText,
  labelText,
  typeText,
  nameText,
  error,
  onChangeFunc,
  placeholderText,
  disabledCondition,
}) => {
  const message = '형식이 올바르지 않습니다.';
  return (
    <>
      <StyledLabel htmlFor={nameText}>
        {labelText}
        <Warning error={error}>{message}</Warning>
      </StyledLabel>
      <StyledInput
        value={valueText}
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

const AuthForm = ({
  history,
  type,
  onSubmit,
  message,
  onChangeMessage,
  modalVisible,
  handleModalOpen,
  handleModalClose,
  userInfo,
}) => {
  const headerText = textMap[type];

  const [id, onChangeId, idError] = useInput(
    userInfo ? userInfo.loginID : '',
    idValidation,
  );
  const [password, onChangePassword, passwordError] = useInput(
    '',
    passwordValidation,
  );
  const [name, onChangeName, nameError] = useInput(
    userInfo ? userInfo.name : '',
    notEmptyValidation,
  );
  const [email, onChangeEmail, emailError] = useInput(
    userInfo ? userInfo.email : '',
    emailValidation,
  );
  const [phoneNumber, onChangePhoneNumber, phoneNumberError] = useInput(
    userInfo ? userInfo.phoneNumber : '',
    phoneNumberValidation,
  );
  const [department, onChangeDepartment, departmentError] = useInput(
    userInfo ? userInfo.department : '',
    notEmptyValidation,
  );
  const [studentId, onChangeStudentId, studentIdError] = useInput(
    userInfo ? userInfo.studentID : '',
    notEmptyValidation,
  );
  const [introduction, onChangeIntroduction, introductionError] = useInput(
    userInfo ? userInfo.introduction : '',
    notEmptyValidation,
  );

  const [profileImageURL, setProfileImageURL] = useState(
    userInfo ? userInfo.profileImageURL : '',
  );
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckError, setPasswordError] = useState(false);

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
    return !(
      passwordError ||
      !password ||
      passwordCheckError ||
      !passwordCheck ||
      emailError ||
      !email ||
      phoneNumberError ||
      !phoneNumber ||
      introductionError ||
      !introduction
    );
  };

  const loginValidation = () => {
    return !(idError || !id || passwordError || !password);
  };

  const setInputErrorMessage = () => {
    console.log('setInputErrorMessage');
    onChangeMessage('모든 값을 올바르게 입력해주세요.');
  };

  const handleLogin = () => {
    if (!loginValidation()) {
      setInputErrorMessage();
      handleModalOpen();
      return;
    }
    onSubmit({
      id,
      password,
    });
  };

  const handleRegister = () => {
    if (!registerValidation()) {
      setInputErrorMessage();
      handleModalOpen();
      return;
    }
    onSubmit({
      id,
      password,
      passwordCheck,
      name,
      email,
      department,
      studentId,
      phoneNumber,
      introduction,
    });
  };

  const handleUpdate = () => {
    if (!updateValidation()) {
      setInputErrorMessage();
      handleModalOpen();
      return;
    }
    onSubmit({
      name,
      password,
      passwordCheck,
      email,
      phoneNumber,
      introduction,
    });
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
      console.log('upup');
      handleUpdate();
    }
  };

  return (
    <>
      <RegisterModalContainer
        visible={modalVisible}
        onConfirm={handleModalClose}
        onCancel={handleModalClose}
        message={message}
      />
      <Block>
        <WhiteBlock>
          <FormListHeader>
            <h2 className="form_list_title">{headerText}</h2>
          </FormListHeader>
          <FormList onSubmit={handleSubmit}>
            <Input
              valueText={id}
              labelText="아이디"
              typeText="text"
              nameText="id"
              error={idError}
              disabledCondition={type === 'update'}
              onChangeFunc={onChangeId}
              placeholderText="영/숫자 4~12자리"
            />
            <Input
              valueText={password}
              labelText="비밀번호"
              typeText="password"
              nameText="password"
              error={passwordError}
              onChangeFunc={onChangePassword}
              placeholderText="8자리 이상"
            />
            {type !== 'login' && (
              <Input
                valueText={passwordCheck}
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
                  valueText={name}
                  labelText="이름"
                  typeText="text"
                  nameText="name"
                  error={nameError}
                  disabledCondition={type === 'update'}
                  onChangeFunc={onChangeName}
                  placeholderText="ex) 김풀씨"
                />
                <Input
                  valueText={email}
                  labelText="이메일"
                  typeText="email"
                  nameText="email"
                  error={emailError}
                  onChangeFunc={onChangeEmail}
                  placeholderText="ex) email@example.com"
                />
                <Input
                  valueText={phoneNumber}
                  labelText="전화번호"
                  typeText="tel"
                  nameText="phoneNumber"
                  error={phoneNumberError}
                  onChangeFunc={onChangePhoneNumber}
                  placeholderText="ex) 010-0000-0000"
                />
                <Input
                  valueText={department}
                  labelText="소속 학과"
                  typeText="text"
                  nameText="department"
                  error={departmentError}
                  onChangeFunc={onChangeDepartment}
                  disabledCondition={type === 'update'}
                  placeholderText="ex) 컴퓨터과학과"
                />
                <Input
                  valueText={studentId}
                  labelText="학번"
                  typeText="text"
                  nameText="studentId"
                  error={studentIdError}
                  onChangeFunc={onChangeStudentId}
                  disabledCondition={type === 'update'}
                  placeholderText="ex) 2021000000"
                />
                <label>프로필 이미지</label>
                <FileUploadButton onSubmit={setProfileImageURL} />
                <ImageContainer>
                  <ImageContainerHeader>현재 이미지</ImageContainerHeader>
                  {profileImageURL ? (
                    <StyledImage src={profileImageURL} />
                  ) : (
                    <p style={{ fontWeight: 300 }}>이미지가 없습니다.</p>
                  )}
                </ImageContainer>
                <label htmlFor="introduction">자기소개</label>
                <StyledTextarea
                  value={introduction}
                  name="introduction"
                  id="introduction"
                  cols="30"
                  rows="5"
                  onChange={onChangeIntroduction}
                  placeholder="자기 소개를 적어주세요"
                >
                  {introduction}
                </StyledTextarea>
              </>
            )}
            <SubmitButton>{headerText}</SubmitButton>
          </FormList>
        </WhiteBlock>
      </Block>
    </>
  );
};

export default AuthForm;
