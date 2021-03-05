import React from 'react';
import CommentList from '../CommentList/CommentList';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
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

const Post = ({
  history,
  post,
  comments,
  selectedMenu,
  onDeletePost,
  onCreateComment,
  onDeleteComment,
}) => {
  console.log(post);
  const { postId, title, body, memberName, createdAt } = post;

  const handleDelete = (e) => {
    e.preventDefault();
    onDeletePost();
  };

  return (
    <WhiteNarrowBlock>
      <PostContainer>
        <TitleContainer>{title}</TitleContainer>
        <InfoContainer>
          <p>{memberName}</p>
          <div />
          <p>{getFullCurrentDateTimeString(createdAt)}</p>
        </InfoContainer>
        <BodyContainer>
          <ReactMarkdown plugins={[gfm]} source={body} />
        </BodyContainer>
        <ButtonContainer>
          <StyledButton
            className="modify"
            to={`/${MENU.POST}/${selectedMenu.id}/edit/${postId}`}
          >
            수정
          </StyledButton>
          <StyledButton className="delete" onClick={handleDelete}>
            삭제
          </StyledButton>
          <StyledButton className="list" onClick={() => history.goBack(1)}>
            목록
          </StyledButton>
        </ButtonContainer>
      </PostContainer>
      <CommentsContainer>
        <CommentList
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
