import React, { useEffect, useState } from 'react';
import RecentNotice from '../../../components/home/RecentNotice/RecentNotice';
import * as postAPI from '../../../lib/api/post';

const RecentNoticeContainer = () => {
  const [notices, setNotices] = useState(null);

  useEffect(() => {
    postAPI.getPostsByUrlPath(1).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setNotices(res.data.data);
      }
    });
  }, []);

  return <RecentNotice notices={notices} />;
};

export default RecentNoticeContainer;
