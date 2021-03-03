import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../../components/board/PostList/PostList';

const PostListContainer = ({ selectedMenu }) => {
  const member = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);

  return <PostList posts={posts} member={member} selectedMenu={selectedMenu} />;
};

export default PostListContainer;
