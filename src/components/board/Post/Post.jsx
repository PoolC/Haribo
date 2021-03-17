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
import getFileUrl from '../../../lib/utils/getFileUrl';

const Post = ({
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

  const {
    body,
    createdAt,
    postId,
    title,
    writerLoginId,
    writerName,
    fileList,
  } = post;

  const handleDelete = (e) => {
    e.preventDefault();
    onDeletePost();
  };

  return (
    <WhiteNarrowBlock className="block">
      <PostContainer>
        <TitleContainer>{title}</TitleContainer>
        <InfoContainer>
          <p>{writerName}</p>
          <div />
          <p>{getFullCurrentDateTimeString(createdAt)}</p>
        </InfoContainer>
        <BodyContainer>
          <Viewer initialValue={body} />
        </BodyContainer>
        <ButtonContainer>
          {memberId === writerLoginId && (
            <StyledButton
              className="modify"
              to={`/${MENU.POST}/${selectedMenu.id}/edit/${postId}`}
            >
              수정
            </StyledButton>
          )}
          {(memberId === writerLoginId || isAdmin) && (
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
        {fileList?.length !== 0
          ? fileList?.map((file) => (
              <File key={file}>
                <a href={getFileUrl(file)}>{getFileUrl(file)}</a>
              </File>
            ))
          : '첨부된 파일 없음'}
      </FileContainer>
      <CommentsContainer>
        <CommentList
          member={member}
          postId={postId}
          comments={comments}
          onCreateComment={onCreateComment}
          onDeleteComment={onDeleteComment}
        />
      </CommentsContainer>
    </WhiteNarrowBlock>
  );
};

export default withRouter(Post);
