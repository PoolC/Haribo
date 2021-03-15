import AdminMember from '../../../components/admin/AdminMember/AdminMember';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const AdminMemberContainer = ({ history }) => {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await memberAPI.getMembers();

      setMembers(response.data.data);
    })();
  }, []);

  const onAcceptMember = (loginID) => {
    memberAPI.acceptMember(loginID).then((res) => {
      if (res.status === 200) {
        setMembers(
          members.map((member) =>
            member.loginID === loginID
              ? { ...member, isActivated: true }
              : member,
          ),
        );
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
          members.map((member) =>
            member.loginID === loginID
              ? { ...member, isAdmin: !isAdmin }
              : member,
          ),
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
