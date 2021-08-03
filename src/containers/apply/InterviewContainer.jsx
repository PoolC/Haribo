import React, { useEffect, useState } from 'react';
import Interview from '../../components/apply/Interview/Interview';
import InterviewAccessDenied from '../../components/apply/Interview/InterviewAccessDenied';
import * as infoAPI from '../../lib/api/info';
import * as interviewAPI from '../../lib/api/interview';

const InterviewContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isSubscriptionPeriod, setIsSubscriptionPeriod] = useState(null);

  useEffect(() => {
    setLoading(true);
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === 200) {
        setIsSubscriptionPeriod(res.data.isSubscriptionPeriod);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    interviewAPI.getInterviews().then((res) => {
      if (res.status === 200) {
        setData(res.data);
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {isSubscriptionPeriod === false && (
        <InterviewAccessDenied loading={loading} />
      )}
      {isSubscriptionPeriod && <Interview data={data} loading={loading} />}
    </>
  );
};

export default InterviewContainer;
