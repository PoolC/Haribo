import AdminMember from '../../../components/admin/AdminMember/AdminMember';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminMemberContainer = ({ history }) => {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    console.log('effect');
    (async () => {
      const response = await memberAPI.getMembers();
      console.log(response);

      setMembers(response.data.data);
    })();
  }, []);

  const onAcceptMember = (loginID) => {
    memberAPI.acceptMember(loginID).then((res) => {
      if (res.status === 200) {
        history.push('/admin/members');
      }
    });
  };

  const onWithdrawMember = (loginID) => {
    memberAPI.withdrawMember(loginID).then((res) => {
      if (res.status === 200) {
        setMembers(members.filter((member) => member.loginID !== loginID));
      }
    });
  };

  const onToggleAdmin = ({ loginID, isAdmin }) => {
    memberAPI.toggleAdmin({ loginID, isAdmin }).then((res) => {
      if (res.status === 200) {
        setMembers(
          members.map((member) => {
            if (member.loginID === loginID) {
              member.isAdmin = !member.isAdmin;
            }
          }),
        );
      }
    });
  };

  if (members === null) {
    return null;
  }

  return (
    <AdminMember
      members={members}
      onAcceptMember={onAcceptMember}
      onWithdrawMember={onWithdrawMember}
      onToggleAdmin={onToggleAdmin}
    />
  );
};

export default AdminMemberContainer;
