import React, { useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';
import {
  Description,
  ImageContainer,
  ImageContainerHeader,
  StyledActionButton,
  StyledForm,
  TitleContainer,
} from './AdminInfo.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';

const AdminInfo = ({ info, onUpdate }) => {
  const editorRef = useRef();

  const [president, onChangePresident] = useInput(
    info ? info.name : '',
    notEmptyValidation,
  );
  const [location, onChangeLocation] = useInput(
    info ? info.location : '',
    notEmptyValidation,
  );
  const [contact, onChangeContact] = useInput(
    info ? info.contact : '',
    notEmptyValidation,
  );
  const [intro, setIntro] = useState('');
  const [recruit, setRecruit] = useState(info ? info.recruit : false);
  const [applyUrl, onChangeApplyUrl] = useInput(
    info ? info.applyUrl : '',
    notEmptyValidation,
  );

  const onChangeRecruit = (e) => {
    setRecruit(e.target.value === 'possible');
  };

  const onEditorChange = (e) => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    //const HTMLContent = editorInstance.getHtml();
    setIntro(markdownContent);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate({ president, location, contact, intro, recruit, applyUrl });
  };

  return (
    <WhiteNarrowBlock>
      <TitleContainer>동아리 정보 관리</TitleContainer>
      <StyledForm>
        <label>회장 이름</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input
          type="text"
          placeholder="ex) 김풀씨"
          value={president}
          onChange={onChangePresident}
        />
        <label>전화번호</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input
          type="text"
          placeholder="ex) 010-0000-0000"
          value={contact}
          onChange={onChangeContact}
        />
        <label>동아리방 위치</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input
          type="text"
          placeholder="ex) 연세대학교 제1공학관 537호"
          value={location}
          onChange={onChangeLocation}
        />
        <label>동아리 소개</label>
        <Description>
          홈페이지 PoolC 메뉴-'동아리 소개'에 반영됩니다
        </Description>
        <Editor
          initialValue={intro}
          ref={editorRef}
          onChange={(e) => onEditorChange(e)}
        />
        <label>메인 이미지 관리</label>
        <Description>이미지 사이즈는 1000px * 200px으로 맞춰주세요</Description>
        <input type="text" />
        <ImageContainer>
          <ImageContainerHeader>현재 이미지 목록</ImageContainerHeader>
        </ImageContainer>
        <label>가입 기간 설정</label>
        <Description>설정에 따라 상단 apply 메뉴가 열립니다.</Description>
        <div>
          <input
            type="radio"
            value="possible"
            onChange={onChangeRecruit}
            checked={recruit === true ? true : false}
          />
          <span>가입 가능 기간</span>
          <input
            type="radio"
            value="impossible"
            onChange={onChangeRecruit}
            checked={recruit === true ? false : true}
          />
          <span>가입 불가 기간</span>
        </div>
        <label>지원서 링크</label>
        <Description>apply 메뉴에서 이 링크로 이동됩니다.</Description>
        <input
          type="text"
          placeholder="http://example.com"
          value={applyUrl}
          onChange={onChangeApplyUrl}
        />
        <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton>
      </StyledForm>
    </WhiteNarrowBlock>
  );
};

export default AdminInfo;
