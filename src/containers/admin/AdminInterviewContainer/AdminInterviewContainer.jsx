import React, { useEffect, useState } from 'react';
import AdminInterview from '../../../components/admin/AdminInterview/AdminInterview';
import { SUCCESS } from '../../../constants/statusCode';
import * as interviewAPI from '../../../lib/api/interview';

const AdminInterviewContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    interviewAPI.getInterviews().then((res) => {
      if (res.status === SUCCESS.OK) {
        setData(res.data);
        setLoading(false);
      }
    });
  }, []);

  return <AdminInterview data={data} loading={loading} />;
};

export default AdminInterviewContainer;
