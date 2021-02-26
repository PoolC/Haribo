import ProjectDetail from '../../../components/projects/ProjectDetail/ProjectDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as projectAPI from '../../../lib/api/project';
import { withRouter } from 'react-router-dom';

const ProjectDetailContainer = ({ location }) => {
  console.log(location);
  const projectId = location.pathname.replace('/project/', '');
  const member = useSelector((state) => state.auth);
  const [project, setProject] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await projectAPI.getProject(projectId);
      console.log(response);

      setProject(response.data);
    })();
  }, []);

  if (project === null) {
    return null;
  }
  return <ProjectDetail project={project} member={member} />;
};

export default withRouter(ProjectDetailContainer);
