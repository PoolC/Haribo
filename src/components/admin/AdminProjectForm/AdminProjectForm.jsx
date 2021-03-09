import React, { useRef, useState } from 'react';
import useInput from '../../../hooks/useInput';
import ActionButton from '../../common/Buttons/ActionButton';
import Input from '../../common/Input/Input';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { notEmptyValidation } from '../../../lib/utils/validation';
import {
  ButtonContainer,
  MemberBlock,
  MemberContainer,
  MemberInfo,
  MemberSearchForm,
  StyledActionButton,
  StyledForm,
  StyledSearchActionButton,
  TitleContainer,
} from './AdminProjectForm.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import FileUploadButton from '../../common/Buttons/FileUploadButton';
import { FileName } from '../../common/FileUploadModal/FileUploadModal.styles';
import {
  ImageContainer,
  ImageContainerHeader,
  StyledImage,
} from '../AdminInfo/AdminInfo.styles';

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
  const [thumbnailURL, setThumbnailURL] = useState(
    project ? project.thumbnailURL : '',
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
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateProject({ name, description, genre, duration, thumbnailURL, body });
  };

  const onClickSearch = (e) => {
    e.preventDefault();
    onSearchMember(searchMember);
    console.log(searchMember);
  };

  function onEditorChange(e) {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    //const HTMLContent = editorInstance.getHtml();
    setBody(markdownContent);
  }

  return (
    <WhiteNarrowBlock>
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
        <label>썸네일 이미지 첨부</label>
        <FileUploadButton onSubmit={setThumbnailURL} />
        <FileName style={{ marginBottom: '0rem' }}>
          {thumbnailURL ? thumbnailURL : '선택된 파일이 없습니다'}
        </FileName>
        <ImageContainer>
          <ImageContainerHeader>현재 이미지</ImageContainerHeader>
          {thumbnailURL ? (
            <StyledImage src={thumbnailURL} />
          ) : (
            <p style={{ fontWeight: 300 }}>이미지가 없습니다.</p>
          )}
        </ImageContainer>
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
    </WhiteNarrowBlock>
  );
};

export default AdminProjectForm;
