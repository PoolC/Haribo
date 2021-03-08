import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import React, { useState, useEffect } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminPassContainer = () => {
  const [members, setMembers] = useState(null);
  const minimumLimit = 6;

  const member = [
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

  const onSubmitSemester = (semester) => {
    memberAPI.getMemberActivityHours(semester).then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setMembers(res.data.data);
      }
    });
  };

  return (
    <AdminPass
      members={members}
      minimumLimit={minimumLimit}
      onUpdateMinPassStandard={onUpdateMinPassStandard}
      onChangeExcepted={onChangeExcepted}
      onSubmitSemester={onSubmitSemester}
    />
  );
};

export default AdminPassContainer;
