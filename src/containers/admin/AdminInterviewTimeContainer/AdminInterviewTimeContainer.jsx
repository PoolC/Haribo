import React, { useEffect, useState } from 'react';
import AdminInterviewTime from '../../../components/admin/AdminInterviewTime/AdminInterviewTime';
import * as interviewAPI from '../../../lib/api/interview';

const AdminInterviewTimeContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    interviewAPI.getInterviews().then((res) => {
      if (res.status === 200) {
        setData(res.data.data);
        setLoading(false);
      }
    });
  }, []);

  /*
  const handleCreateInterviewTime = ({
    date,
    startTime,
    endTime,
    capacity,
  }) => {
    interviewAPI
      .createInterviewSlot({ date, startTime, endTime, capacity })
      .then((res) => {
        if (res.status === 200) {
          setData(res);
          setLoading(false);
        }
      });
  };

  const handleDeleteInterviewTime = ({ slotId }) => {
    interviewAPI.deleteInterviewSlot({ slotId }).then((res) => {
      if (res.status === 200) {
        setData(res);
        setLoading(false);
      }
    });
  };

  const handleDeleteAllInterviewTimes = () => {
    interviewAPI.deleteAllInterviewSlot().then((res) => {
      if (res.status === 200) {
        setData(res);
        setLoading(false);
      }
    });
  };

  const handleUpdateInterviewTime = ({
    slotId,
    startTime,
    endTime,
    capacity,
  }) => {
    interviewAPI
      .updateInterviewSlot({ slotId, startTime, endTime, capacity })
      .then((res) => {
        if (res.status === 200) {
          setData(res);
          setLoading(false);
        }
      });
  };
  */

  return <AdminInterviewTime data={data} loading={loading} setData={setData} />;
};

export default AdminInterviewTimeContainer;
