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
  const [searchMembers, setSearchMembers] = useState([]);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectID) {
      (async () => {
        const response = await projectAPI.getProject(projectID);
        setProject(response.data.data);
        setMembers(response.data.data.members);
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
        memberLoginIDs: members.map((member) => member.loginID),
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
  }) => {
    projectAPI
      .updateProject({
        projectID,
        name,
        description,
        genre,
        duration,
        thumbnailURL,
        body,
        memberLoginIDs: members.map((member) => member.loginID),
      })
      .then((res) => {
        if (res.status === 200) {
          history.push('/admin/projects');
        }
      });
  };

  const onSearchMember = (name) => {
    const response = memberAPI.searchMember({ name });
    response.then((res) => {
      if (res.status === 200) {
        setSearchMembers(res.data.data);
      }
    });
  };

  const onAddMember = (e, member) => {
    e.preventDefault();
    setMembers([...members, member]);
  };

  const onDeleteMember = (e, member) => {
    e.preventDefault();
    setMembers(members.filter((m) => m.loginID !== member.loginID));
  };

  return (
    <AdminProjectForm
      onCreateProject={onCreateProject}
      onSearchMember={onSearchMember}
      onUpdateProject={onUpdateProject}
      members={members}
      searchMembers={searchMembers}
      onAddMember={onAddMember}
      onDeleteMember={onDeleteMember}
      project={project}
    />
  );
};

export default withRouter(AdminProjectFormContainer);
