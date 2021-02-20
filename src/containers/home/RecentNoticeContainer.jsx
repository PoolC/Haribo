import React from 'react';
import RecentNotice from '../../components/home/RecentNotice';

const RecentNoticeContainer = () => {
  const notices = [
    {
      id: 0,
      title: '2020-2 종강총회 회의록 (20201222)',
      date: '2021-02-16',
    },
    {
      id: 1,
      title: 'Recent Notice',
      date: '2021-02-16',
    },
    {
      id: 2,
      title: 'Recent Notice',
      date: '2021-02-16',
    },
    {
      id: 3,
      title: 'Recent Notice',
      date: '2021-02-16',
    },
    {
      id: 4,
      title: 'Recent Notice',
      date: '2021-02-16',
    },
  ];
  return <RecentNotice notices={notices} />;
};

export default RecentNoticeContainer;
