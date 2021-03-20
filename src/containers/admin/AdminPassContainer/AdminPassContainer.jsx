import AdminPass from '../../../components/admin/AdminPass/AdminPass';
import React, { useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminPassContainer = () => {
  const [members, setMembers] = useState(null);

  const onChangeExcepted = (loginID, isExcepted) => {
    memberAPI.updateMemberIsExcepted(loginID).then((res) => {
      if (res.status === 200) {
        setMembers(
          members.map((m) =>
            m.member.loginID === loginID
              ? { ...m, isExcepted: !isExcepted }
              : m,
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

  const onWithdraw = (loginID, setIsExpelled) => {
    memberAPI.updateMemberRole({ loginID, role: 'EXPELLED' }).then((res) => {
      if (res.status === 200) {
        setIsExpelled(true);
      }
    });
  };

  return (
    <AdminPass
      members={members}
      onChangeExcepted={onChangeExcepted}
      onSubmitSemester={onSubmitSemester}
      onWithdraw={onWithdraw}
    />
  );
};

export default AdminPassContainer;
