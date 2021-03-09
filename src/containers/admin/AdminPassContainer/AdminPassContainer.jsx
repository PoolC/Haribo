import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import React, { useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminPassContainer = () => {
  const [members, setMembers] = useState(null);

  const onUpdateMinPassStandard = () => {};

  const onChangeExcepted = () => {};

  const onSubmitSemester = (semester) => {
    memberAPI.getMemberActivityHours(semester).then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setMembers(res.data.data);
      }
    });
  };

  return (
    <AdminPass
      members={members}
      onUpdateMinPassStandard={onUpdateMinPassStandard}
      onChangeExcepted={onChangeExcepted}
      onSubmitSemester={onSubmitSemester}
    />
  );
};

export default AdminPassContainer;
