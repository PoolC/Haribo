import AdminMember from '../../../components/admin/AdminMember/AdminMember';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';
import Spinner from '../../../components/common/Spinner/Spinner';

const AdminMemberContainer = ({ history }) => {
  const [memberLoading, setMemberLoading] = useState(true);
  const [rolesLoading, setRolesLoading] = useState(true);

  const [members, setMembers] = useState(null);
  const [searchMembers, setSearchMembers] = useState([]);
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await memberAPI.getMembers();
      setMembers(response.data.data);
      setMemberLoading(false);
    })();
  }, []);

  useEffect(() => {
    memberAPI
      .getMemberRole()
      .then((res) => {
        if (res.status === 200) {
          setRoles(res.data.data);
          setRolesLoading(false);
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  const onAcceptMember = (loginID) => {
    memberAPI.acceptMember(loginID).then((res) => {
      if (res.status === 200) {
        alert('회원 승인이 완료되었습니다.');
        setMembers(
          members.map((member) =>
            member.loginID === loginID
              ? { ...member, isActivated: true }
              : member,
          ),
        );
        setSearchMembers(
          searchMembers.map((member) =>
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
        alert('회원 탈퇴가 완료되었습니다.');
        setMembers(members.filter((member) => member.loginID !== loginID));
        setSearchMembers(
          searchMembers.filter((member) => member.loginID !== loginID),
        );
      }
    });
  };

  const onToggleAdmin = ({ loginID, isAdmin }) => {
    memberAPI.toggleAdmin({ loginID, isAdmin }).then((res) => {
      if (res.status === 200) {
        alert('관리자 임명이 완료되었습니다.');
        setMembers(
          members.map((member) =>
            member.loginID === loginID
              ? { ...member, isAdmin: !isAdmin }
              : member,
          ),
        );
        setSearchMembers(
          searchMembers.map((member) =>
            member.loginID === loginID
              ? { ...member, isAdmin: !isAdmin }
              : member,
          ),
        );
      }
    });
  };

  const onUpdateMemberRole = ({ loginID, role }) => {
    memberAPI.updateMemberRole({ loginID, role }).then((res) => {
      if (res.status === 200) {
        alert('회원 상태 변경이 완료되었습니다.');
        setMembers(
          members.map((member) =>
            member.loginID === loginID ? { ...member, role: role } : member,
          ),
        );
        setSearchMembers(
          searchMembers.map((member) =>
            member.loginID === loginID ? { ...member, role: role } : member,
          ),
        );
      }
    });
  };

  const onSearchMember = (name) => {
    setSearchMembers(members.filter((member) => member.name.includes(name)));
  };

  if (members === null || roles === null) {
    return null;
  }

  return (
    <>
      {(memberLoading || rolesLoading) && <Spinner />}
      {!(memberLoading || rolesLoading) && (
        <AdminMember
          members={members}
          onAcceptMember={onAcceptMember}
          onWithdrawMember={onWithdrawMember}
          onToggleAdmin={onToggleAdmin}
          onUpdateMemberRole={onUpdateMemberRole}
          onSearchMember={onSearchMember}
          searchMembers={searchMembers}
          roles={roles}
        />
      )}
    </>
  );
};

export default AdminMemberContainer;
