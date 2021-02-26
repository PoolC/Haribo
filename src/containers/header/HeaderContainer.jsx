import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/auth';

const HeaderContainer = ({ selected }) => {
  const dispatch = useDispatch();
  const applyURL = '/';
  const member = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Header
      selected={selected}
      member={member}
      applyURL={applyURL}
      onLogout={onLogout}
    />
  );
};

export default HeaderContainer;
