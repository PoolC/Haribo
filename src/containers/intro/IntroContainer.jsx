import React, { useState, useEffect } from 'react';
import Intro from '../../components/intro/Intro';
import * as infoAPI from '../../lib/api/info';

const IntroContainer = () => {
  const [introduction, setIntroduction] = useState(null);
  const [locationUrl, setLocationUrl] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIntroduction(res.data.introduction);
        setLocationUrl(res.data.locationUrl);
        setLoading(false);
      }
    });
  }, [introduction]);

  return (
    <>
      <Intro
        loading={loading}
        introduction={introduction}
        locationUrl={locationUrl}
      />
    </>
  );
};

export default IntroContainer;
