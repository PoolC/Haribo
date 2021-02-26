import AuthForm from '../../../components/auth/AuthForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authAPI from '../../../lib/api/auth';

const RegisterFormContainer = ({ location, history }) => {
  const dispatch = useDispatch();

  const onSubmit = ({
    id,
    password,
    name,
    email,
    department,
    studentId,
    phoneNumber,
    introduction,
  }) => {
    try {
      console.log(id);
      console.log(password);
      const response = authAPI.register({
        id,
        password,
        name,
        email,
        department,
        studentId,
        phoneNumber,
        introduction,
      });
    } catch (e) {
      console.log(e);
    }

    // const onSubmit = ({
    //   id,
    //   password,
    //   name,
    //   email,
    //   department,
    //   studentId,
    //   phoneNumber,
    //   introduction,
    // }) => {
    //   try {
    //     const response = authAPI.register({
    //       id,
    //       password,
    //       name,
    //       email,
    //       department,
    //       studentId,
    //       phoneNumber,
    //       introduction,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //   }

    //history.push('/register/success');
  };

  return <AuthForm type="register" onSubmit={onSubmit} />;
};

export default withRouter(RegisterFormContainer);
