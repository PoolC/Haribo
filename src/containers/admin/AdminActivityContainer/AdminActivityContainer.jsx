import AdminActivity from '../../../components/admin/AdminActivity/AdminActivity';
import React from 'react';

const AdminActivityContainer = () => {
  const activities = [
    {
      id: 0,
      title: 'C++ 세미나',
      host: '송재우',
      startDate: '2019-09-01',
      isSeminar: true,
      available: true,
    },
    {
      id: 1,
      title: 'NLP 논문 스터디',
      host: '이재성',
      startDate: '2019-09-01',
      isSeminar: false,
      available: false,
    },
  ];
  return <AdminActivity activities={activities} />;
};

export default AdminActivityContainer;
