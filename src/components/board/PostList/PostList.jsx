import React from 'react';
import { MENU } from '../../../constants/menus';
import { isAuthorizedRole } from '../../../lib/utils/checkRole';
import { getFullCurrentDateString } from '../../../lib/utils/getDateString';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import ActionButton from '../../common/Buttons/ActionButton';
import Spinner from '../../common/Spinner/Spinner';
import Pagination from '../Pagination/Pagination';
import {
  CommentCount,
  PostListHead,
  PostListHeader,
  PostListRow,
  PostListTable,
  SubInfoContainer,
  WriterIcon,
  DateIcon,
  PostListRowAuthor,
  PostListRowDate,
  MemberLink,
  NewIcon,
  StyledTitleLink,
} from './PostList.styles';

const PostList = ({
  loading,
  selectedMenu,
  posts,
  member,
  postPerPage,
  totalPosts,
  paginate,
  setCurrentPageSet,
  currentPageSet,
  currentPage,
  pagePerPage,
}) => {
  const {
    status: { isLogin },
    user: { isAdmin, role },
  } = member;

  const isNewPost = (createdAt) => {
    const now = new Date();
    const postCreatedTime = new Date(createdAt);

    const isNew = Date.parse(now) - Date.parse(postCreatedTime) <= 6.048e8;

    return isNew;
  };

  return (
    <WhiteNarrowBlock>
      <PostListHeader>
        <h2 className="post_list_title">{selectedMenu?.name}</h2>
        {!loading &&
          isLogin &&
          ((selectedMenu.writePermission === 'ADMIN' && isAdmin) ||
            (selectedMenu.writePermission === 'MEMBER' &&
              isLogin &&
              isAuthorizedRole(role))) && (
            <ActionButton
              to={`/${MENU.BOARDS}/${selectedMenu?.urlPath}/${MENU.POST}/new/${selectedMenu?.id}`}
            >
              글쓰기
            </ActionButton>
          )}
      </PostListHeader>
      {loading && <Spinner />}
      {!loading && (
        <>
          <PostListTable>
            <thead>
              <PostListHead>
                <th className="post_list_head_title hide">제목</th>
                <th className="post_list_head_author hide">작성자</th>
                <th className="post_list_head_date hide">작성일</th>
                <th className="post_list_head">게시물 목록</th>
              </PostListHead>
            </thead>
            <tbody>
              {posts.map((post) => (
                <PostListRow key={post.postId}>
                  <td className="post-list-row-title">
                    <StyledTitleLink
                      to={`/${MENU.BOARDS}/${selectedMenu?.urlPath}/${MENU.POST}/${post.postId}`}
                    >
                      {post.title}
                    </StyledTitleLink>
                    <CommentCount>[{post.comments.length}]</CommentCount>
                    {isNewPost(post.createdAt) && <NewIcon>N</NewIcon>}
                  </td>
                  <SubInfoContainer>
                    <PostListRowAuthor>
                      <WriterIcon
                        className="fas fa-user"
                        style={{ marginRight: '0.2rem' }}
                      ></WriterIcon>
                      <MemberLink to={`/${MENU.MEMBER}/${post.writerLoginId}`}>
                        {post.writerName}
                      </MemberLink>
                    </PostListRowAuthor>
                    <PostListRowDate>
                      <DateIcon
                        className="far fa-calendar"
                        style={{ marginRight: '0.2rem' }}
                      ></DateIcon>
                      {getFullCurrentDateString(post.createdAt)}
                    </PostListRowDate>
                  </SubInfoContainer>
                </PostListRow>
              ))}
            </tbody>
          </PostListTable>
          <Pagination
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
            setCurrentPageSet={setCurrentPageSet}
            currentPage={currentPage}
            pagePerPage={pagePerPage}
            currentPageSet={currentPageSet}
          />
        </>
      )}
    </WhiteNarrowBlock>
  );
};

export default PostList;
