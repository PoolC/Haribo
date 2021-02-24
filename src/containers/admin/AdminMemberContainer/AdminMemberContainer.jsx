import AdminMember from '../../../components/admin/AdminMember/AdminMember';
import React from 'react';

const AdminMemberContainer = () => {
  const members = [
    {
      id: 0,
      name: '김민지',
      loginId: 'mingd1023',
      email: 'mingd1023@gmail.com',
      phoneNumber: '010-3070-9326',
      isActivated: true,
      studentId: '2015110019',
      department: '국어국문학과',
      isAdmin: true,
    },
    {
      id: 1,
      name: '정윤석',
      loginId: 'abcd',
      email: 'abcd@gmail.com',
      phoneNumber: '010-3070-9326',
      isActivated: false,
      studentId: '2015110019',
      department: '컴퓨터과학과',
      isAdmin: false,
    },
    {
      id: 2,
      name: '박형철',
      loginId: 'dddd',
      email: 'dddd@gmail.com',
      phoneNumber: '010-3070-9326',
      isActivated: true,
      studentId: '2015110019',
      department: '컴퓨터과학과',
      isAdmin: false,
    },
  ];
  return <AdminMember members={members} />;
};

export default AdminMemberContainer;
