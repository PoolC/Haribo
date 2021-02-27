import React, { useEffect, useState } from 'react';
import AdminProjectForm from '../../../components/admin/AdminProjectForm/AdminProjectForm';
import * as projectAPI from '../../../lib/api/project';
import * as memberAPI from '../../../lib/api/member';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const AdminProjectFormContainer = ({ match, history }) => {
  const projectID = match.params.projectID;
  const hostID = useSelector((state) => state.auth.user.memberId);

  const [members, setMembers] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectID) {
      (async () => {
        const response = await projectAPI.getProject(projectID);
        console.log(response.data);
        setProject(response.data);
      })();
    }
  }, []);

  if (projectID && project === null) {
    return null;
  }

  const onCreateProject = ({
    name,
    thumbnailURL,
    genre,
    duration,
    description,
    body,
  }) => {
    projectAPI
      .createProject({
        name,
        genre,
        duration,
        thumbnailURL,
        description,
        body,
        members,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/admin/projects');
        }
      });
  };

  const onUpdateProject = ({
    name,
    description,
    genre,
    duration,
    thumbnailURL,
    body,
    members,
  }) => {
    console.log(projectID);
    console.log(body);
    projectAPI
      .updateProject({
        projectID,
        name,
        description,
        genre,
        duration,
        thumbnailURL,
        body,
        members,
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/admin/projects');
        }
      });
  };

  const onSearchMember = (name) => {
    console.log(name);
    const response = memberAPI.searchMember({ name });
    response.then((res) => {
      console.log(res);
    });
  };
  return (
    <AdminProjectForm
      onCreateProject={onCreateProject}
      onSearchMember={onSearchMember}
      onUpdateProject={onUpdateProject}
      members={members}
      project={project}
    />
  );
};

export default withRouter(AdminProjectFormContainer);
