import AuthForm from '../../../components/auth/AuthForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const RegisterFormContainer = ({ location, history }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    history.push('/register/success');
  };

  return <AuthForm type="register" onSubmit={onSubmit} />;
};

export default withRouter(RegisterFormContainer);
