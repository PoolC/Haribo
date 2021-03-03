import MemberDetail from '../../../components/members/MemberDetail/MemberDetail';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as memberAPI from '../../../lib/api/member';

const MemberDetailContainer = ({ match }) => {
  const { memberID } = match.params;
  const [member, setMember] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await memberAPI.getMember(memberID);
      setMember(response.data);
    })();
  }, [memberID]);

  if (member === null) {
    return null;
  }

  return <MemberDetail member={member} />;
};

export default withRouter(MemberDetailContainer);
