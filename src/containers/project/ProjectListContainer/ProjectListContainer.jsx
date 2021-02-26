import ProjectList from '../../../components/projects/ProjectList/ProjectList';
import React, { useEffect, useState } from 'react';
import * as projectAPI from '../../../lib/api/project';

const ProjectListContainer = () => {
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

  return <ProjectList projects={projects} />;
};

export default ProjectListContainer;
