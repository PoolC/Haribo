import React from 'react';
import MemberDetailContainer from '../../containers/member/MemberDetailContainer/MemberDetailContainer';
import { pageAuthCheckByPermission } from '../../lib/utils/authCheck';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const MemberDetailPage = ({ history }) => {
  const member = useSelector((state) => state.auth);

  pageAuthCheckByPermission(history, member, 'MEMBER');

  return <MemberDetailContainer />;
};

export default withRouter(MemberDetailPage);
