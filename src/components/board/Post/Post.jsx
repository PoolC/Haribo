import React from 'react';
import CommentList from '../CommentList/CommentList';
import { MENU } from '../../../constants/menus';
import { withRouter } from 'react-router-dom';
import { getFullCurrentDateTimeString } from '../../../lib/utils/getDateString';
import {
  BodyContainer,
  ButtonContainer,
  CommentsContainer,
  InfoContainer,
  PostContainer,
  StyledButton,
  TitleContainer,
} from './Post.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import {
  File,
  FileContainer,
  FileContainerTitle,
} from '../PostForm/PostForm.styles';
import { Viewer } from '@toast-ui/react-editor';
import getFileUrl, { getDecodedFileUrl } from '../../../lib/utils/getFileUrl';
import { MemberName } from '../PostList/PostList.styles';
import Spinner from '../../common/Spinner/Spinner';

const Post = ({
  loading,
  history,
  member,
  post,
  comments,
  selectedMenu,
  onDeletePost,
  onCreateComment,
  onDeleteComment,
}) => {
  const {
    user: { memberId, isAdmin },
  } = member;

  const handleDelete = (e) => {
    e.preventDefault();
    onDeletePost();
  };

  return (
    <WhiteNarrowBlock className="block">
      {loading && <Spinner />}
      {!loading && (
        <>
          <PostContainer>
            <TitleContainer>{post.title}</TitleContainer>
            <InfoContainer>
              <MemberName>
                {post.writerName}
              </MemberName>
              <div />
              <p>{getFullCurrentDateTimeString(post.createdAt)}</p>
            </InfoContainer>
            <BodyContainer>
              <Viewer initialValue={post.body} />
            </BodyContainer>
            <ButtonContainer>
              {memberId === post.writerLoginId && (
                <StyledButton
                  className="modify"
                  to={`/${MENU.BOARDS}/${selectedMenu?.urlPath}/${MENU.POST}/${selectedMenu?.id}/edit/${post.postId}`}
                >
                  수정
                </StyledButton>
              )}
              {(memberId === post.writerLoginId || isAdmin) && (
                <StyledButton className="delete" onClick={handleDelete}>
                  삭제
                </StyledButton>
              )}
              <StyledButton
                className="list"
                onClick={() =>
                  history.push(`/${MENU.BOARDS}/${selectedMenu.urlPath}?page=1`)
                }
              >
                목록
              </StyledButton>
            </ButtonContainer>
          </PostContainer>
          <FileContainerTitle>첨부된 파일 목록</FileContainerTitle>
          <FileContainer>
            {post.fileList?.length !== 0
              ? post.fileList?.map((file) => (
                  <File key={file}>
                    <a href={getFileUrl(file)}>{getDecodedFileUrl(file)}</a>
                  </File>
                ))
              : '첨부된 파일 없음'}
          </FileContainer>
          <CommentsContainer>
            <CommentList
              member={member}
              postId={post.postId}
              comments={comments}
              onCreateComment={onCreateComment}
              onDeleteComment={onDeleteComment}
            />
          </CommentsContainer>
        </>
      )}
    </WhiteNarrowBlock>
  );
};

export default withRouter(Post);
