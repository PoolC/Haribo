import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import Input from '../../common/Input/Input';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { notEmptyValidation } from '../../../lib/utils/validation';

const AdminProjectFormBlock = styled.div`
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
`;

const StyledActionButton = styled(ActionButton)`
  height: 2rem;
  width: 15rem;
  margin: 2rem 0;
`;

const StyledSearchActionButton = styled(ActionButton)`
  height: 2rem;
`;

const MemberSearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    width: 10rem;
  }
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px 0;
  & > h4 {
    display: flex;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const MemberBlock = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 5px 2px 5px 10px;
  border: 1px solid ${colors.mint[1]};
  border-radius: 3px;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-size: 0.8rem;
    margin: 0.25rem;
  }
  & > .name {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
`;

const SearchMember = ({ member, onAddMember }) => {
  const { name, department, studentId } = member;
  return (
    <MemberBlock>
      <MemberInfo>
        <p className="name">{name}</p>
        <p>{studentId}</p>
        <p>{department}</p>
      </MemberInfo>
      <ButtonContainer>
        <ActionButton onClick={(e) => onAddMember(e, member)}>
          추가
        </ActionButton>
      </ButtonContainer>
    </MemberBlock>
  );
};

const Member = ({ member, onDeleteMember }) => {
  const { name, department, studentId } = member;
  return (
    <MemberBlock>
      <MemberInfo>
        <p className="name">{name}</p>
        <p>{studentId}</p>
        <p>{department}</p>
      </MemberInfo>
      <ButtonContainer>
        <ActionButton onClick={(e) => onDeleteMember(e, member)}>
          <i className="fas fa-times"></i>
        </ActionButton>
      </ButtonContainer>
    </MemberBlock>
  );
};

const AdminProjectForm = ({
  onCreateProject,
  onSearchMember,
  onUpdateProject,
  members,
  searchMembers,
  onAddMember,
  onDeleteMember,
  project,
}) => {
  const editorRef = useRef();

  const [searchMember, onChangeSearchMember] = useInput(
    members,
    notEmptyValidation,
  );
  const [name, onChangeName] = useInput(
    project ? project.name : '',
    notEmptyValidation,
  );
  const [thumbnailURL, onChangeThumbnailURL] = useInput(
    project ? project.thumbnailURL : '',
    notEmptyValidation,
  );
  const [genre, onChangeGenre] = useInput(
    project ? project.genre : '',
    notEmptyValidation,
  );
  const [duration, onChangeDuration] = useInput(
    project ? project.duration : '',
    notEmptyValidation,
  );
  const [description, onChangeDescription] = useInput(
    project ? project.description : '',
    notEmptyValidation,
  );
  const [body, setBody] = useState(project ? project.body : '');

  const handleCreate = (e) => {
    e.preventDefault();
    onCreateProject({ name, genre, duration, thumbnailURL, description, body });
    console.log('submit');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateProject({ name, description, genre, duration, thumbnailURL, body });
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    onSearchMember(searchMember);
  };

  function onEditorChange(e) {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    console.log(markdownContent);
    const HTMLContent = editorInstance.getHtml();
    console.log(HTMLContent);
    setBody(markdownContent);
  }

  return (
    <AdminProjectFormBlock>
      <TitleContainer>프로젝트 생성</TitleContainer>
      <StyledForm>
        <Input
          valueText={name}
          labelText="프로젝트 이름"
          typeText="text"
          nameText="name"
          onChangeFunc={onChangeName}
          placeholderText="프로젝트 이름"
        />
        <Input
          valueText={genre}
          labelText="장르"
          typeText="text"
          nameText="genre"
          onChangeFunc={onChangeGenre}
          placeholderText="ex) 모바일 게임, 슈팅, 웹, .."
        />
        <Input
          valueText={duration}
          labelText="활동 기간"
          typeText="text"
          nameText="duration"
          onChangeFunc={onChangeDuration}
          placeholderText="ex) 2019.10.23 ~ 2020.10.23"
        />
        <Input
          valueText={thumbnailURL}
          labelText="썸네일 이미지 첨부"
          typeText="text"
          nameText="thumbnailURL"
          onChangeFunc={onChangeThumbnailURL}
        />
        <Input
          valueText={description}
          labelText="설명 요약"
          typeText="text"
          nameText="description"
          onChangeFunc={onChangeDescription}
          placeholderText="공백 포함 30자 이내"
        />
        <label>프로젝트 내용</label>
        <Editor
          initialValue={body}
          ref={editorRef}
          onChange={(e) => onEditorChange(e)}
        />
        <label>참여자</label>
        <MemberSearchForm>
          <Input
            valueText={searchMember}
            labelText=""
            typeText="text"
            nameText="id"
            onChangeFunc={onChangeSearchMember}
            placeholderText="회원 이름으로 검색"
          />
          <StyledSearchActionButton onClick={onClickSearch}>
            검색
          </StyledSearchActionButton>
        </MemberSearchForm>
        <MemberContainer>
          <h4>회원 검색 결과</h4>
          {searchMembers.map((member) => (
            <SearchMember
              key={member.loginID}
              member={member}
              onAddMember={onAddMember}
            />
          ))}
        </MemberContainer>
        <MemberContainer>
          <h4>참여자 목록</h4>
          {members.map((member) => (
            <Member
              key={member.loginID}
              member={member}
              onDeleteMember={onDeleteMember}
            />
          ))}
        </MemberContainer>
        {project ? (
          <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton>
        ) : (
          <StyledActionButton onClick={handleCreate}>제출</StyledActionButton>
        )}
      </StyledForm>
    </AdminProjectFormBlock>
  );
};

export default AdminProjectForm;
