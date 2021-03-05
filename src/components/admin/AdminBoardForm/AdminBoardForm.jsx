import React from 'react';
import useInput from '../../../hooks/useInput';
import Input from '../../common/Input/Input';
import { notEmptyValidation } from '../../../lib/utils/validation';
import { AdminBoardFormBlock, StyledActionButton, StyledForm, TitleContainer } from './AdminBoardForm.styles';

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
