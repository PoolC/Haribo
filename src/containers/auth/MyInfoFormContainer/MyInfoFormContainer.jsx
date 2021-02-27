import AuthForm from '../../../components/auth/AuthForm';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authAPI from '../../../lib/api/auth';
import {
  removeHeaderAccessToken,
  setHeaderAccessToken,
} from '../../../lib/utils/axiosUtil';

const MyInfoFormContainer = ({ location, history }) => {
  const [message, setMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const handleModalOpen = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    (async () => {
      removeHeaderAccessToken();
      setHeaderAccessToken();
      const response = await authAPI.loadUser();
      setUserInfo(response.data);
    })();
  }, []);

  if (userInfo === null) {
    return null;
  }

  function onChangeMessage(msg) {
    setMessage(msg);
  }

  const onSubmit = ({
    password,
    passwordCheck,
    email,
    phoneNumber,
    introduction,
  }) => {
    try {
      const response = authAPI.register({
        password,
        passwordCheck,
        email,
        phoneNumber,
        introduction,
      });
      response
        .then((res) => {
          if (res.status === 202) {
            setMessage('성공적으로 회원정보를 수정했습니다.');
            history.push('/');
          }
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status === 409) {
            setMessage('이미 가입된 정보입니다.');
            handleModalOpen();
            return;
          }

          if (e.response.status === 400) {
            setMessage('모든 값을 올바르게 입력해주세요.');
            handleModalOpen();
            return;
          }

          setMessage('정보 수정 실패');
          handleModalOpen();
          return;
        });
    } catch (e) {
      //console.log(e);
    }
  };

  return (
    <AuthForm
      type="update"
      onSubmit={onSubmit}
      message={message}
      onChangeMessage={onChangeMessage}
      modalVisible={modalVisible}
      handleModalOpen={handleModalOpen}
      handleModalClose={handleModalClose}
      userInfo={userInfo}
    />
  );
};

export default withRouter(MyInfoFormContainer);
