import React, { useState } from 'react';
import AdminProjectForm from '../../../components/admin/AdminProjectForm/AdminProjectForm';
import * as projectAPI from '../../../lib/api/project';
import * as memberAPI from '../../../lib/api/member';
import { useSelector } from 'react-redux';

const AdminProjectFormContainer = ({ history }) => {
  const [members, setMembers] = useState([]);
  const hostID = useSelector((state) => state.auth.user.memberId);
  const onCreateProject = ({
    name,
    thumbnailURL,
    genre,
    duration,
    description,
    body,
  }) => {
    console.log(
      name,
      thumbnailURL,
      genre,
      duration,
      description,
      body,
      members,
    );
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
      members={members}
    />
  );
};

export default AdminProjectFormContainer;
