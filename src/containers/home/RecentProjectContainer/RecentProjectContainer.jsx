import React, { useEffect, useState } from 'react';
import RecentProject from '../../../components/home/RecentProject/RecentProject';
import * as projectAPI from '../../../lib/api/project';

const RecentProjectContainer = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await projectAPI.getProjects();
      setProjects(response.data.data);
    })();
  }, []);

  if (projects === null) {
    return null;
  }
  return <RecentProject projects={projects} />;
};

export default RecentProjectContainer;
