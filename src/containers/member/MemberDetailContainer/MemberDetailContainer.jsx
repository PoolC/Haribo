import MemberDetail from '../../../components/members/MemberDetail/MemberDetail';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as memberAPI from '../../../lib/api/member';
import { MENU } from '../../../constants/menus';

const MemberDetailContainer = ({ match, history }) => {
  const { memberID } = match.params;
  const [member, setMember] = useState(null);

  useEffect(() => {
    memberAPI
      .getMember(memberID)
      .then((res) => {
        if (res.status === 200) {
          setMember(res.data);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  }, [memberID, history]);

  if (member === null) {
    return null;
  }

  return <MemberDetail member={member} />;
};

export default withRouter(MemberDetailContainer);
