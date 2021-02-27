import AuthForm from '../../../components/auth/AuthForm';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../../modules/auth';
import {
  removeHeaderAccessToken,
  setHeaderAccessToken,
} from '../../../lib/utils/axiosUtil';

const LoginFormContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };
  const {
    authError,
    status: { isLogin },
  } = useSelector((state) => state.auth);

  const onSubmit = ({ id, password }) => {
    dispatch(login({ id, password }));
  };

  useEffect(() => {
    removeHeaderAccessToken();
    if (authError) {
      if (authError.response.status === 403) {
        setMessage('관리자 승인 전에는 로그인이 불가능합니다.');
        handleModalOpen();
        return;
      }

      if (authError.response.status === 401) {
        setMessage('아이디와 비밀번호를 확인해주세요.');
        handleModalOpen();
        return;
      }

      setMessage('로그인에 실패하였습니다.');
      handleModalOpen();
      return;
    }

    if (isLogin) {
      handleModalOpen();
      history.push('/');
    }
  }, [authError, isLogin, history]);

  function onChangeMessage(msg) {
    setMessage(msg);
  }

  return (
    <AuthForm
      type="login"
      onSubmit={onSubmit}
      message={message}
      onChangeMessage={onChangeMessage}
      modalVisible={modalVisible}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
    />
  );
};

export default withRouter(LoginFormContainer);
