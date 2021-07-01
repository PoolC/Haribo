import React, { useEffect, useState } from 'react';
import RecentNotice from '../../../components/home/RecentNotice/RecentNotice';
import * as postAPI from '../../../lib/api/post';
import Spinner from '../../../components/common/Spinner/Spinner';

const RecentNoticeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState(null);

  useEffect(() => {
    postAPI.getPosts({ urlPath: 'notice', page: 1 }).then((res) => {
      if (res.status === 200) {
        setNotices(res.data.data.slice(0, 5));
        setLoading(false);
      }
    });
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && <RecentNotice notices={notices} />}
    </>
  );
};

export default RecentNoticeContainer;
