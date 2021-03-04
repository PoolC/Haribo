import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostFormContainer from '../../containers/board/PostFormContainer/PostFormContainer';
import { pageAuthCheck } from '../../lib/utils/authCheck';

const PostWritePage = ({ history }) => {
  const member = useSelector((state) => state.auth);

  pageAuthCheck(history, member, 'MEMBER');

  return (
    <>
      <PostFormContainer />
    </>
  );
};

export default withRouter(PostWritePage);
