import React, { useEffect, useState } from 'react';
import AdminProject from '../../../components/admin/AdminProject/AdminProject';
import * as projectAPI from '../../../lib/api/project';

const AdminProjectContainer = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    console.log('effect');
    (async () => {
      const response = await projectAPI.getProjects();
      console.log(response);

      setProjects(response.data.data);
    })();
  }, []);

  if (projects === null) {
    return null;
  }
  // const projects = [
  //   { id: 0, name: '프로젝트1', genre: '플랫포머' },
  //   { id: 1, name: '프로젝트2', genre: '슈팅' },
  // ];
  return <AdminProject projects={projects} />;
};

export default AdminProjectContainer;
