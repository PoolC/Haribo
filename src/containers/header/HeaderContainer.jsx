import React from 'react';
import Header from '../../components/header/Header';

const HeaderContainer = ({ selected }) => {
  //const member = null;
  const applyURL = '/';
  const member = {
    name: '민지',
    isAdmin: true,
  };
  return <Header selected={selected} member={member} applyURL={applyURL} />;
};

export default HeaderContainer;
