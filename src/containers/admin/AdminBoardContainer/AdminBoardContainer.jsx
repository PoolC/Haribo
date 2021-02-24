import AdminBoard from '../../../components/admin/AdminBoard/AdminBoard';
import React from 'react';

const AdminBoardContainer = () => {
  const boards = [
    {
      id: 0,
      name: '공지사항',
      urlPath: '/notice',
      readPermission: 'PUBLIC',
      writePermission: 'ADMIN',
    },
    {
      id: 1,
      name: '자유게시판',
      urlPath: '/free',
      readPermission: 'PUBLIC',
      writePermission: 'MEMBER',
    },
  ];
  return <AdminBoard boards={boards} />;
};

export default AdminBoardContainer;
