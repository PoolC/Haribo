import React from 'react';
import Footer from '../../components/footer/Footer';

const FooterContainer = () => {
  const info = {
    president: '전영주',
    location: '제1공학관 A537',
    phoneNumber: '010-0000-0000',
  };

  return <Footer info={info} />;
};

export default FooterContainer;
