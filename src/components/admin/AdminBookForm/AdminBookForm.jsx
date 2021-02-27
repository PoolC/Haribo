import React from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import colors from '../../../lib/styles/colors';
import { notEmptyValidation } from '../../../lib/utils/validation';
import ActionButton from '../../common/Buttons/ActionButton';
import Input from '../../common/Input/Input';

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

const AdminBookForm = ({ onCreateBook, onUpdateBook, book }) => {
  const [title, onChangeTitle] = useInput(
    book ? book.title : '',
    notEmptyValidation,
  );
  const [author, onChangeAuthor] = useInput(
    book ? book.author : '',
    notEmptyValidation,
  );
  const [imageURL, onChangeImageURL] = useInput(
    book ? book.imageURL : '',
    notEmptyValidation,
  );
  const [info, onChangeInfo] = useInput(
    book ? book.info : '',
    notEmptyValidation,
  );
  const handleCreate = (e) => {
    e.preventDefault();
    onCreateBook({ title, author, imageURL, info });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateBook({ title, author, imageURL, info });
  };
  return (
    <AdminBookFormBlock>
      <TitleContainer>도서 생성</TitleContainer>
      <StyledForm>
        <Input
          valueText={title}
          labelText="책 제목"
          typeText="text"
          nameText="title"
          onChangeFunc={onChangeTitle}
          placeholderText="ex) 클린 코드"
        />
        <Input
          valueText={author}
          labelText="저자"
          typeText="text"
          nameText="author"
          onChangeFunc={onChangeAuthor}
          placeholderText="ex) 로버트 C. 마틴"
        />
        <Input
          valueText={imageURL}
          labelText="표지 이미지 첨부"
          typeText="text"
          nameText="imageURL"
          onChangeFunc={onChangeImageURL}
        />
        <Input
          valueText={info}
          labelText="설명"
          typeText="text"
          nameText="info"
          onChangeFunc={onChangeInfo}
          placeholderText="ex) ㅇㅇㅇ 기증"
        />
        {book ? (
          <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton>
        ) : (
          <StyledActionButton onClick={handleCreate}>제출</StyledActionButton>
        )}
      </StyledForm>
    </AdminBookFormBlock>
  );
};

export default AdminBookForm;
