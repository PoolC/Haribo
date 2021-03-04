import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import CommentList from '../CommentList/CommentList';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { MENU } from '../../../constants/menus';
import { withRouter } from 'react-router-dom';
import {
  getFullCurrentDateString,
  getFullCurrentDateTimeString,
} from '../../../lib/utils/getDateString';

const PostBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 40px;
`;

const PostContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  font-size: 2rem;
  font-weight: 600;
  word-break: keep-all;
  line-height: 2.5rem;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: 300;
  font-size: 0.9rem;
  color: ${colors.brown[0]};
  padding: 5px 0 20px 0;
  border-bottom: 1px solid ${colors.mint[0]};
  & > div {
    display: flex;
    align-items: center;
    width: 1px;
    height: 0.9rem;
    background-color: ${colors.brown[0]};
    margin: 0 0.5rem;
  }
`;

const BodyContainer = styled.div`
  width: 100%;
  padding: 40px 0 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 10px 0 20px 0;
  border-bottom: 1px solid ${colors.mint[0]};
`;

const CommentsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(ActionButton)`
  margin: 0 0 0 15px;
  &.modify {
    background-color: ${colors.brown[0]};
    &:hover {
      background-color: ${colors.brown[1]};
    }
  }
  &.delete {
    background-color: ${colors.red[0]};
    &:hover {
      background-color: ${colors.red[1]};
    }
  }
`;

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
    <PostBlock>
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
    </PostBlock>
  );
};

export default withRouter(Post);
