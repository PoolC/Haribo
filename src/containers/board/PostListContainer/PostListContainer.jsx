import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostList from '../../../components/board/PostList/PostList';
import Spinner from '../../../components/common/Spinner/Spinner';
import * as postAPI from '../../../lib/api/post';

const PostListContainer = ({ location, selectedMenu, match }) => {
  const initialCurrentPage =
    Number(location.search.replace('?page=', '')) < 1
      ? 1
      : Number(location.search.replace('?page=', ''));
  const member = useSelector((state) => state.auth);
  const urlPath = selectedMenu?.urlPath;

  const postPerPage = 15;
  const pagePerPage = 5;

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [currentPageSet, setCurrentPageSet] = useState(
    Math.ceil(currentPage / pagePerPage),
  );

  useEffect(() => {
    setCurrentPage(initialCurrentPage);
    setCurrentPageSet(Math.ceil(currentPage / pagePerPage));
  }, [initialCurrentPage, currentPage, pagePerPage]);

  useEffect(() => {
    setLoading(true);
    if (urlPath) {
      postAPI.getPosts(urlPath).then((res) => {
        if (res.status === 200) {
          setPosts(res.data.data);
          setLoading(false);
        }
      });
    }
  }, [urlPath, selectedMenu]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <>
          <PostList
            posts={currentPosts}
            member={member}
            selectedMenu={selectedMenu}
            postPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            setCurrentPageSet={setCurrentPageSet}
            currentPage={currentPage}
            currentPageSet={currentPageSet}
            pagePerPage={pagePerPage}
          />
        </>
      )}
    </>
  );
};

export default withRouter(PostListContainer);
