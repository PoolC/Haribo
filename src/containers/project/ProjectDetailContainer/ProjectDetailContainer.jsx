import ProjectDetail from '../../../components/projects/ProjectDetail/ProjectDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as projectAPI from '../../../lib/api/project';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/common/Spinner/Spinner';

const ProjectDetailContainer = ({ location }) => {
  const projectId = location.pathname.replace('/project/', '');
  const member = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await projectAPI.getProject(projectId);
      setProject(response.data.data);
      setLoading(false);
    })();
  }, [projectId]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && <ProjectDetail project={project} member={member} />}
    </>
  );
};

export default withRouter(ProjectDetailContainer);
