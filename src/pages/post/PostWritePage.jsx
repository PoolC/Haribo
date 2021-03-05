import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostFormContainer from '../../containers/board/PostFormContainer/PostFormContainer';

const PostWritePage = ({ history }) => {
  const member = useSelector((state) => state.auth);

  return (
    <>
      <PostFormContainer />
    </>
  );
};

export default withRouter(PostWritePage);
