import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberListContainer from '../../containers/member/MemberListContainer/MemberListContainer';

const MemberListPage = ({ history }) => {
  const member = useSelector((state) => state.auth);

  return <MemberListContainer />;
};

export default withRouter(MemberListPage);
