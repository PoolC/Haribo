import React, { useEffect, useState } from 'react';
import AdminProject from '../../../components/admin/AdminProject/AdminProject';
import * as projectAPI from '../../../lib/api/project';

const AdminProjectContainer = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await projectAPI.getProjects();
      console.log(response);

      setProjects(response.data.data);
    })();
  }, []);

  if (projects === null) {
    return null;
  }

  return <AdminProject projects={projects} />;
};

export default AdminProjectContainer;
