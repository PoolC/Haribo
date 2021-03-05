import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../../components/board/PostList/PostList';
import * as postAPI from '../../../lib/api/post';

const PostListContainer = ({ selectedMenu }) => {
  const member = useSelector((state) => state.auth);
  const urlPath = selectedMenu.urlPath;

  const [posts, setPosts] = useState([]);

  // if (!currentLocation) {
  //   history.push('/boards/notice');
  // }

  useEffect(() => {
    postAPI.getPosts(urlPath).then((res) => {
      if (res.status === 200) {
        setPosts(res.data.data);
      }
    });
  }, [urlPath]);

  if (posts === null) {
    return null;
  }

  return <PostList posts={posts} member={member} selectedMenu={selectedMenu} />;
};

export default PostListContainer;
