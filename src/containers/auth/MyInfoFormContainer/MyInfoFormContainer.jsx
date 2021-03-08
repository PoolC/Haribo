import AuthForm from '../../../components/auth/AuthForm';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as authAPI from '../../../lib/api/auth';
import {
  removeHeaderAccessToken,
  setHeaderAccessToken,
} from '../../../lib/utils/axiosUtil';
import { MENU } from '../../../constants/menus';
import Spinner from '../../../components/common/Spinner/Spinner';

const MyInfoFormContainer = ({ location, history }) => {
  const [loading, setLoading] = useState(true);

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
      authAPI
        .loadUser()
        .then((res) => {
          if (res.status === 200) {
            setUserInfo(res.data);
            setLoading(false);
          }
        })
        .catch((e) => {
          console.error(e.message);
          history.push(`/${MENU.FORBIDDEN}`);
        });
    })();
  }, [history]);

  // if (userInfo === null) {
  //   return null;
  // }

  function onChangeMessage(msg) {
    setMessage(msg);
  }

  const onSubmit = ({
    name,
    password,
    passwordCheck,
    email,
    phoneNumber,
    introduction,
  }) => {
    try {
      const response = authAPI.updateUser({
        name,
        password,
        passwordCheck,
        email,
        phoneNumber,
        introduction,
      });
      response
        .then((res) => {
          if (res.status === 200) {
            setMessage('성공적으로 회원정보를 수정했습니다.');
            handleModalOpen();
            //history.push('/');
          }
        })
        .catch((e) => {
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
      console.error(e);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
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
      )}
    </>
  );
};

export default withRouter(MyInfoFormContainer);
