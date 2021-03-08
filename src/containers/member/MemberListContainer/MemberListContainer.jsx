import MemberList from '../../../components/members/MemberList/MemberList';
import React, { useEffect, useState } from 'react';
import * as memberAPI from '../../../lib/api/member';
import { withRouter } from 'react-router-dom';
import { MENU } from '../../../constants/menus';
import Spinner from '../../../components/common/Spinner/Spinner';

const MemberListContainer = ({ history }) => {
  const [members, setMembers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    memberAPI
      .getMembers()
      .then((res) => {
        if (res.status === 200) {
          setMembers(res.data.data);
          setLoading(false);
        }
      })
      .catch((e) => {
        console.error(e.message);
        history.push(`/${MENU.FORBIDDEN}`);
      });
  }, [history]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && <MemberList members={members} />}
    </>
  );
};

export default withRouter(MemberListContainer);
