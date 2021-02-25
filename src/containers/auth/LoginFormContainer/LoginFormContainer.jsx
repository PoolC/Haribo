import AuthForm from '../../../components/auth/AuthForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LoginFormContainer = ({ location, history }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    history.push('/');
  };
  return <AuthForm type="login" onSubmit={onSubmit} />;
};

export default withRouter(LoginFormContainer);
