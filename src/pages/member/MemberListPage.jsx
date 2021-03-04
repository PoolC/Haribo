import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberListContainer from '../../containers/member/MemberListContainer/MemberListContainer';
import { pageAuthCheck } from '../../lib/utils/authCheck';

const MemberListPage = ({ history }) => {
  const member = useSelector((state) => state.auth);

  pageAuthCheck(history, member, 'MEMBER');

  return <MemberListContainer />;
};

export default withRouter(MemberListPage);
