import React, { useEffect, useState } from 'react';
import RecentProject from '../../../components/home/RecentProject/RecentProject';
import * as projectAPI from '../../../lib/api/project';
import Spinner from '../../../components/common/Spinner/Spinner';

const RecentProjectContainer = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await projectAPI.getProjects();
      setProjects(response.data.data.slice(0, 7));
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      {!loading && <RecentProject projects={projects} />}
    </>
  );
};

export default RecentProjectContainer;
