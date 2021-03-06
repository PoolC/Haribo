import React, { useState, useEffect } from 'react';
import Apply from '../../components/apply/Apply';
import * as infoAPI from '../../lib/api/info';

const ApplyContainer = () => {
  const [isSubscriptionPeriod, setIsSubscriptionPeriod] = useState(null);
  const [applyUri, setApplyUri] = useState(null);

  useEffect(() => {
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIsSubscriptionPeriod(res.data.isSubscriptionPeriod);
        setApplyUri(res.data.applyUri);
      }
    });
  });

  if (isSubscriptionPeriod == null || applyUri == null) return null;

  return (
    <Apply isSubscriptionPeriod={isSubscriptionPeriod} applyUri={applyUri} />
  );
};

export default ApplyContainer;
