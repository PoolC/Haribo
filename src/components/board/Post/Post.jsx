import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import CommentList from '../CommentList/CommentList';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const PostBlock = styled.div`
  flex: 4;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
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

const Post = ({ post }) => {
  const { id, title, body, author, createdAt, comments } = post;

  return (
    <PostBlock>
      <PostContainer>
        <TitleContainer>{title}</TitleContainer>
        <InfoContainer>
          <p>{author}</p>
          <div />
          <p>{createdAt}</p>
        </InfoContainer>
        <BodyContainer>
          <ReactMarkdown plugins={[gfm]} source={body} />
        </BodyContainer>
        <ButtonContainer>
          <StyledButton className="modify">수정</StyledButton>
          <StyledButton className="delete">삭제</StyledButton>
          <StyledButton className="list">목록</StyledButton>
        </ButtonContainer>
      </PostContainer>
      <CommentsContainer>
        <CommentList comments={comments} />
      </CommentsContainer>
    </PostBlock>
  );
};

export default Post;
