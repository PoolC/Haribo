import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import useInput from '../../../hooks/useInput';
import Input from '../../common/Input/Input';
import { notEmptyValidation } from '../../../lib/utils/validation';

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

const AdminBoardForm = ({ board, onCreateBoard, onUpdateBoard }) => {
  const [name, onChangeName] = useInput(
    board ? board.name : '',
    notEmptyValidation,
  );
  const [urlPath, onChangeUrlPath] = useInput(
    board ? board.urlPath : '',
    notEmptyValidation,
  );
  const [readPermission, onChangeReadPermission] = useInput(
    board ? board.readPermission : '',
    notEmptyValidation,
  );
  const [writePermission, onChangeWritePermission] = useInput(
    board ? board.writePermission : '',
    notEmptyValidation,
  );

  const handleCreate = (e) => {
    e.preventDefault();
    onCreateBoard({ name, urlPath, readPermission, writePermission });
    console.log('submit');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateBoard({ name, urlPath, readPermission, writePermission });
  };

  return (
    <AdminBoardFormBlock>
      <TitleContainer>게시판 생성</TitleContainer>
      <StyledForm>
        <Input
          valueText={name}
          labelText="게시판 이름"
          typeText="text"
          nameText="name"
          onChangeFunc={onChangeName}
          placeholderText="ex) 공지사항"
        />
        <Input
          valueText={urlPath}
          labelText="url"
          typeText="text"
          nameText="urlPath"
          onChangeFunc={onChangeUrlPath}
          placeholderText="ex) notice"
        />
        <Input
          valueText={readPermission}
          labelText="읽기 권한"
          typeText="text"
          nameText="readPermission"
          onChangeFunc={onChangeReadPermission}
          placeholderText=""
        />
        <Input
          valueText={writePermission}
          labelText="쓰기 권한"
          typeText="text"
          nameText="writePermission"
          onChangeFunc={onChangeWritePermission}
          placeholderText=""
        />
        {board ? (
          <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton>
        ) : (
          <StyledActionButton onClick={handleCreate}>제출</StyledActionButton>
        )}
      </StyledForm>
    </AdminBoardFormBlock>
  );
};

export default AdminBoardForm;
