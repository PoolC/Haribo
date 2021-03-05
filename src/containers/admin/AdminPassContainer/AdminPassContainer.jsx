import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import React from 'react';

const AdminPassContainer = () => {
  const minimumLimit = 6;
  const members = [
    {
      id: 0,
      name: '김민지',
      department: '국어국문학과',
      studentId: '2015110019',
      isExcepted: true,
      fullfilled: false,
    },
    {
      id: 1,
      name: '정윤석',
      department: '컴퓨터과학과',
      studentId: '2016000000',
      isExcepted: false,
      fullfilled: true,
    },
    {
      id: 2,
      name: '최풀씨',
      department: '컴퓨터과학과',
      studentId: '2017000000',
      isExcepted: false,
      fullfilled: false,
    },
  ];
  const onUpdateMinPassStandard = () => {};

  const onChangeExcepted = () => {};

  return (
    <AdminPass
      members={members}
      minimumLimit={minimumLimit}
      onUpdateMinPassStandard={onUpdateMinPassStandard}
      onChangeExcepted={onChangeExcepted}
    />
  );
};

export default AdminPassContainer;
