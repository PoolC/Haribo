import MemberList from '../../../components/members/MemberList/MemberList';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';

const MemberListContainer = () => {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await memberAPI.getMembers();
      setMembers(response.data.data);
    })();
  }, []);

  if (members === null) {
    return null;
  }
  return <MemberList members={members} />;
};

export default MemberListContainer;
