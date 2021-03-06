import MemberList from '../../../components/members/MemberList/MemberList';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';
import { withRouter } from 'react-router-dom';
import { MENU } from '../../../constants/menus';

const MemberListContainer = ({ history }) => {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    memberAPI
      .getMembers()
      .then((res) => {
        if (res.status === 200) {
          setMembers(res.data.data);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  }, [history]);

  if (members === null) {
    return null;
  }
  return <MemberList members={members} />;
};

export default withRouter(MemberListContainer);
