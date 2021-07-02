import React, { useState, useEffect } from 'react';
import * as infoAPI from '../../../lib/api/info';
import Spinner from '../../../components/common/Spinner/Spinner';
import ApplyBanner from '../../../components/home/ApplyBanner/ApplyBanner';
import { useSelector } from 'react-redux';

const ApplyBannerContainer = () => {
  const [loading, setLoading] = useState(true);
  const [isSubscriptionPeriod, setIsSubscriptionPeriod] = useState(null);
  const [applyUri, setApplyUri] = useState(null);
  const member = useSelector((state) => state.auth);
  const isLogin = member.status.isLogin;
  const role = member.user.role;

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIsSubscriptionPeriod(res.data.isSubscriptionPeriod);
        setApplyUri(res.data.applyUri);
        setLoading(false);
      }
    });
  });

  if (
    isSubscriptionPeriod == null ||
    (isSubscriptionPeriod === true && applyUri == null) ||
    isSubscriptionPeriod === false ||
    (isLogin && role !== 'UNACCEPTED')
  )
    return null;

  return (
    <>
      {loading && <Spinner />}
      {!loading && <ApplyBanner />}
    </>
  );
};

export default ApplyBannerContainer;
