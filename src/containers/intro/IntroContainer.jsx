import React, { useState, useEffect } from 'react';
import Intro from '../../components/intro/Intro';
import * as infoAPI from '../../lib/api/info';

const IntroContainer = () => {
  const [introduction, setIntroduction] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIntroduction(res.data.introduction);
      }
    });
  }, [introduction]);

  if (introduction == null) return null;

  return <Intro introduction={introduction} />;
};

export default IntroContainer;
