import React from 'react';
import { MENU } from '../../../constants/menus';
import { getFullCurrentDateString } from '../../../lib/utils/getDateString';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import ActionButton from '../../common/Buttons/ActionButton';
import Pagination from '../Pagination/Pagination';
import {
  CommentCount,
  PostListHead,
  PostListHeader,
  PostListRow,
  PostListTable,
  StyledLink,
  SubInfoContainer,
  WriterIcon,
  DateIcon,
  PostListRowAuthor,
  PostListRowDate,
  MemberLink,
} from './PostList.styles';

const PostList = ({
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
  const { writePermission } = selectedMenu;
  const {
    status: { isLogin },
    user: { isAdmin },
  } = member;

  return (
    <WhiteNarrowBlock>
      <PostListHeader>
        <h2 className="post_list_title">{selectedMenu?.name}</h2>
        {isLogin &&
          ((writePermission === 'ADMIN' && isAdmin) ||
            (writePermission === 'MEMBER' && isLogin)) && (
            <ActionButton
              to={`/${MENU.BOARDS}/${selectedMenu?.urlPath}/${MENU.POST}/new/${selectedMenu?.id}`}
            >
              글쓰기
            </ActionButton>
          )}
      </PostListHeader>
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
                <StyledLink
                  to={`/${MENU.BOARDS}/${selectedMenu?.urlPath}/${MENU.POST}/${post.postId}`}
                >
                  {post.title}
                </StyledLink>
                <CommentCount>[{post.comments.length}]</CommentCount>
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
    </WhiteNarrowBlock>
  );
};

export default PostList;
