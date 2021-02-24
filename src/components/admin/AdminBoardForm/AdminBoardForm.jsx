import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const AdminBoardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > label {
    margin: 2rem 0 1rem 0;
    font-weight: 600;
  }
  & > input {
    height: 2rem;
    width: 15rem;
    outline: 0;
  }
`;

const StyledActionButton = styled(ActionButton)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`;

const AdminBoardForm = () => {
  return (
    <AdminBoardFormBlock>
      <TitleContainer>게시판 생성</TitleContainer>
      <StyledForm>
        <label>게시판 이름</label>
        <input type="text" placeholder="ex) 공지사항" />
        <label>URL</label>
        <input type="text" placeholder="ex) notice" />
        <label>읽기 권한</label>
        <input type="text" placeholder="ex) notice" />
        <label>쓰기 권한</label>
        <input type="text" placeholder="ex) notice" />
        <StyledActionButton>제출</StyledActionButton>
      </StyledForm>
    </AdminBoardFormBlock>
  );
};

export default AdminBoardForm;
