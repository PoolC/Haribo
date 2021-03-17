import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import React, { useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminPassContainer = () => {
  const [members, setMembers] = useState(null);

  const onChangeExcepted = (loginID, isExcepted) => {
    memberAPI.updateMemberIsExcepted(loginID).then((res) => {
      if (res.status === 200) {
        setMembers(
          members.map((member) =>
            member.loginID === loginID
              ? { ...member, isExcepted: !isExcepted }
              : member,
          ),
        );
      }
    });
  };

  const onSubmitSemester = (semester) => {
    memberAPI.getMemberActivityHours(semester).then((res) => {
      if (res.status === 200) {
        setMembers(res.data.data);
      }
    });
  };

  return (
    <AdminPass
      members={members}
      onChangeExcepted={onChangeExcepted}
      onSubmitSemester={onSubmitSemester}
    />
  );
};

export default AdminPassContainer;
