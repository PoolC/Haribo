import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../../components/board/PostList/PostList';
import * as postAPI from '../../../lib/api/post';

const PostListContainer = ({ selectedMenu }) => {
  const member = useSelector((state) => state.auth);
  const boardID = selectedMenu.id;

  const [posts, setPosts] = useState([]);

  // if (!currentLocation) {
  //   history.push('/boards/notice');
  // }

  useEffect(() => {
    postAPI.getPosts(boardID).then((res) => {
      if (res.status === 200) {
        console.log(res.data.data);
        setPosts(res.data.data);
      }
    });
  }, [boardID]);

  if (posts === null) {
    return null;
  }

  return <PostList posts={posts} member={member} selectedMenu={selectedMenu} />;
};

export default PostListContainer;
