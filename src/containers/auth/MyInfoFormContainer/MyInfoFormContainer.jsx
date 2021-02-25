import AuthForm from '../../../components/auth/AuthForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const MyInfoFormContainer = ({ location, history }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    history.push('/');
  };
  return <AuthForm type="update" onSubmit={onSubmit} />;
};

export default withRouter(MyInfoFormContainer);
