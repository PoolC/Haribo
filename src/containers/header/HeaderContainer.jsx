import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';

const HeaderContainer = ({ selected }) => {
  const member = null;
  const applyURL = '/';
  // const member = {
  //   name: '민지',
  //   isAdmin: true,
  // };
  const state = useSelector((state) => state);
  console.log(state);
  return <Header selected={selected} member={member} applyURL={applyURL} />;
};

export default HeaderContainer;
