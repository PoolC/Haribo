import MemberDetail from '../../../components/members/MemberDetail/MemberDetail';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as memberAPI from '../../../lib/api/member';

const MemberDetailContainer = ({ match }) => {
  const { memberId } = match.params;
  const [member, setMember] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await memberAPI.getMember(memberId);
      setMember(response.data);
    })();
  }, []);

  if (member === null) {
    return null;
  }

  return <MemberDetail member={member} />;
};

export default withRouter(MemberDetailContainer);
