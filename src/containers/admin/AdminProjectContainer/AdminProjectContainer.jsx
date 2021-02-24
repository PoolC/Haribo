import React from 'react';
import AdminProject from '../../../components/admin/AdminProject/AdminProject';

const AdminProjectContainer = () => {
  const projects = [
    { id: 0, name: '프로젝트1', genre: '플랫포머' },
    { id: 1, name: '프로젝트2', genre: '슈팅' },
  ];
  return <AdminProject projects={projects} />;
};

export default AdminProjectContainer;
