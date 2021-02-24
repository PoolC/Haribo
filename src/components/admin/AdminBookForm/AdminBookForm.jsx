import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const AdminBookFormBlock = styled.div`
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

const AdminBookForm = () => {
  return (
    <AdminBookFormBlock>
      <TitleContainer>도서 생성</TitleContainer>
      <StyledForm>
        <label>책 제목</label>
        <input type="text" placeholder="ex) 클린 코드" />
        <label>저자</label>
        <input type="text" placeholder="ex) 로버트 C. 마틴" />
        <label>표지 이미지 첨부</label>
        <input type="text" />
        <label>설명</label>
        <input type="text" placeholder="ex) ㅇㅇㅇ 기증" />
        <StyledActionButton>제출</StyledActionButton>
      </StyledForm>
    </AdminBookFormBlock>
  );
};

export default AdminBookForm;
