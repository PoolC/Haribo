import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const AdminInfoBlock = styled.div`
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

const ImageContainer = styled.div`
  margin: 2rem 0;
`;

const ImageContainerHeader = styled.header`
  font-weight: 600;
`;

const Description = styled.p`
  color: ${colors.brown[0]};
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

const AdminInfo = () => {
  return (
    <AdminInfoBlock>
      <TitleContainer>동아리 정보 관리</TitleContainer>
      <StyledForm>
        <label>회장 이름</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input type="text" placeholder="ex) 귀도 반 로섬" />
        <label>전화번호</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input type="text" placeholder="ex) 010-0000-0000" />
        <label>동아리방 위치</label>
        <Description>홈페이지 Footer에 반영됩니다</Description>
        <input type="text" placeholder="ex) 연세대학교 제1공학관 537호" />
        <label>동아리 소개</label>
        <Description>
          홈페이지 PoolC 메뉴-'동아리 소개'에 반영됩니다
        </Description>
        <MdEditor
          style={{ height: '500px', width: '100%' }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
          placeholder="마크다운 형식으로 작성해주세요"
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
          <input type="radio" value={true} />
          <span>가입 가능 기간</span>
          <input type="radio" value={false} />
          <span>가입 불가 기간</span>
        </div>
        <label>지원서 링크</label>
        <Description>apply 메뉴에서 이 링크로 이동됩니다.</Description>
        <input type="text" placeholder="http://example.com" />
        <StyledActionButton>수정</StyledActionButton>
      </StyledForm>
    </AdminInfoBlock>
  );
};

export default AdminInfo;
