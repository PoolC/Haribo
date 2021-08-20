import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import PostList from '../../../components/board/PostList/PostList';
import { MENU } from '../../../constants/menus';
import { CLIENT_ERROR, SUCCESS } from '../../../constants/statusCode';
import * as postAPI from '../../../lib/api/post';

const PostListContainer = ({ location, selectedMenu, history }) => {
  const pageInUrl = Number(location.search.replace('?page=', ''));
  const initialCurrentPage = pageInUrl < 1 ? 1 : pageInUrl;
  const member = useSelector((state) => state.auth);
  const urlPath = selectedMenu?.urlPath;

  const totalPosts = selectedMenu?.postCount;
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
      postAPI
        .getPosts({ urlPath, page: currentPage })
        .then((res) => {
          if (res.status === SUCCESS.OK) {
            setPosts(res.data.data);
            setLoading(false);
          }
        })
        .catch((e) => {
          console.error(e);
          setLoading(false);
          if (
            e.response.status === CLIENT_ERROR.NOT_FOUND ||
            e.response.status === CLIENT_ERROR.BAD_REQUEST
          ) {
            history.push(`/${MENU.NOT_FOUND}`);
            return;
          }
        });
    }
  }, [urlPath, selectedMenu, currentPage, history]);

  //const indexOfLastPost = currentPage * postPerPage;
  //const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts;
  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      <PostList
        loading={loading}
        posts={currentPosts}
        member={member}
        selectedMenu={selectedMenu}
        postPerPage={postPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        setCurrentPageSet={setCurrentPageSet}
        currentPage={currentPage}
        currentPageSet={currentPageSet}
        pagePerPage={pagePerPage}
      />
    </>
  );
};

export default withRouter(PostListContainer);
