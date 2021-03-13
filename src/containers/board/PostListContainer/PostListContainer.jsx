import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../../components/board/PostList/PostList';
import Spinner from '../../../components/common/Spinner/Spinner';
import * as postAPI from '../../../lib/api/post';

const PostListContainer = ({ selectedMenu }) => {
  const member = useSelector((state) => state.auth);
  const urlPath = selectedMenu.urlPath;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    postAPI.getPosts(urlPath).then((res) => {
      if (res.status === 200) {
        setPosts(res.data.data);
        setLoading(false);
      }
    });
  }, [urlPath]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <PostList posts={posts} member={member} selectedMenu={selectedMenu} />
      )}
    </>
  );
};

export default PostListContainer;
