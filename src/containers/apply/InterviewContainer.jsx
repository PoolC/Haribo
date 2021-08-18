import React, { useEffect, useState } from 'react';
import Interview from '../../components/apply/Interview/Interview';
import InterviewAccessDenied from '../../components/apply/Interview/InterviewAccessDenied';
import { SUCCESS } from '../../constants/statusCode';
import * as infoAPI from '../../lib/api/info';
import * as interviewAPI from '../../lib/api/interview';

const InterviewContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [mySlotId, setMySlotId] = useState(null);
  const [isSubscriptionPeriod, setIsSubscriptionPeriod] = useState(null);

  useEffect(() => {
    setLoading(true);
    infoAPI.getPoolCInfo().then((res) => {
      if (res.status === SUCCESS.OK) {
        setIsSubscriptionPeriod(res.data.isSubscriptionPeriod);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    interviewAPI.getInterviews().then((res) => {
      if (res.status === SUCCESS.OK) {
        setMySlotId(res.data.mySlotId);
        setData(res.data.data);
        setLoading(false);
      }
    });
  }, []);

  const handleSelectInterviewTime = ({ slotId }) => {
    interviewAPI.createInterviewApplication({ slotId }).then((res) => {
      if (res.status === SUCCESS.OK) {
        setData(res.data.data);
        setMySlotId(slotId);
        alert('성공적으로 신청되었습니다.');
      } else {
        alert('면접 신청에 실패하였습니다.');
      }
    });
  };

  const handleCancelInterviewTime = ({ loginId }) => {
    interviewAPI.deleteInterviewApplication({ loginId }).then((res) => {
      if (res.status === SUCCESS.OK) {
        setData(res.data.data);
        setMySlotId(null);
        alert('성공적으로 면접이 취소되었습니다.');
      } else {
        alert('면접 취소를 실패하였습니다.');
      }
    });
  };

  return (
    <>
      {isSubscriptionPeriod === false && (
        <InterviewAccessDenied loading={loading} />
      )}
      {isSubscriptionPeriod && (
        <Interview
          mySlotId={mySlotId}
          data={data}
          loading={loading}
          handleSelectInterviewTime={handleSelectInterviewTime}
          handleCancelInterviewTime={handleCancelInterviewTime}
        />
      )}
    </>
  );
};

export default InterviewContainer;
