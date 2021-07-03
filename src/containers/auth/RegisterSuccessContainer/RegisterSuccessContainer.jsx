import React, { useEffect, useState } from 'react';
import RegisterSuccess from '../../../components/auth/RegisterSuccess';
import * as infoAPI from '../../../lib/api/info';
import Spinner from '../../../components/common/Spinner/Spinner';

const RegisterSuccessContainer = () => {
  const [loading, setLoading] = useState(true);
  const [isSubscriptionPeriod, setIsSubscriptionPeriod] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIsSubscriptionPeriod(res.data.isSubscriptionPeriod);
        setLoading(false);
      }
    });
  });

  if (isSubscriptionPeriod == null) return null;

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <RegisterSuccess isSubscriptionPeriod={isSubscriptionPeriod} />
      )}
    </>
  );
};

export default RegisterSuccessContainer;
