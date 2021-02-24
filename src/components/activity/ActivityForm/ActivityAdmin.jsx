import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const ActivityAdminBlock = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
  }
`;

const ActivityAdminContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 80px 10px 120px 10px;
  & > .project_container_title {
    font-weight: 700;
    margin-bottom: 30px;
    max-width: 1200px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0 40px 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledActionButton = styled(ActionButton)`
  width: 160px;
`;

const ItemContainer = styled.div`
  margin-bottom: 30px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  textarea {
    outline: 0;
  }
  p {
    color: ${colors.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
  }
`;

const StyledInput = styled.input`
  outline: 0;
  border: 1px solid ${colors.brown[0]};
  height: 2rem;
  border-radius: 2px;
  width: 100%;
  max-width: 320px;
  outline: ${colors.gray[1]};
  &.capacity {
    width: 5rem;
    margin-right: 10px;
  }
  &.startDate {
    width: 10rem;
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${colors.mint[2]};
  cursor: pointer;
  background-color: ${colors.gray[1]};
  border: 1px solid ${colors.mint[1]};
  padding: 3px;
  border-radius: 3px;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const TagInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > input {
    width: 8rem;
  }
  & > button {
    margin: 0 0 0 10px;
  }
`;

const TagListHeader = styled.header`
  margin: 40px 0 10px 0;
  font-weight: 700;
`;

const HourContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  & > .hour {
    width: 3rem;
  }
  & > input {
    margin-right: 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  & > button {
    margin: 0;
  }
`;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = ({ tags }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </TagListBlock>
  );
};

const mdParser = new MarkdownIt(/* Markdown-it options */);

function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

const ActivityAdmin = () => {
  const [tags, setTags] = useState([
    '파이썬',
    '기초',
    '머신러닝',
    '쉬움',
    '으아아아아',
  ]);
  return (
    <ActivityAdminBlock>
      <ActivityAdminContainer>
        <TitleContainer>
          <Title>세미나/스터디 개설</Title>
        </TitleContainer>
        <StyledForm autoComplete="off">
          <ItemContainer>
            <Item>
              <label htmlFor="title">세미나/스터디 제목</label>
              <StyledInput
                type="text"
                name="title"
                placeholder="ex) 파이썬 기초 세미나"
              />
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="startDate">시작일</label>
              <p>시작일이 2020년 10월 23일인 경우, 2020-10-23 입력</p>
              <StyledInput
                type="date"
                name="startDate"
                placeholder="YYYY-MM-DD"
                className="startDate"
              />
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="isSeminar">형태</label>
              <div>
                <input type="radio" name="isSeminar" value={true} />
                <span>세미나</span>
              </div>
              <div>
                <input type="radio" name="isSeminar" value={false} />
                <span>스터디</span>
              </div>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="capacity">정원</label>
              <div>
                <StyledInput
                  className="capacity"
                  type="number"
                  name="capacity"
                  placeholder="ex) 10"
                />
                <span>명</span>
              </div>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="capacity">시간</label>
              <HourContainer>
                <StyledInput
                  className="classHour"
                  type="text"
                  name="classHour"
                  placeholder="ex) 매주 금요일 14시"
                />
                <span>에</span>
              </HourContainer>
              <HourContainer>
                <StyledInput
                  className="hour"
                  type="number"
                  name="hour"
                  placeholder="ex) 2"
                />
                <span>시간 진행</span>
              </HourContainer>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="tag">태그</label>
              <p>
                난이도, 다루는 내용, 분야 등<br />
                ex) #기초 #파이썬 #웹 #프론트엔드
              </p>
              <TagInput>
                <StyledInput type="text" name="tag" placeholder="ex) 기초" />
                <ActionButton>추가</ActionButton>
              </TagInput>
              <TagListHeader>추가된 태그 목록</TagListHeader>
              <p>삭제하고 싶은 태그를 클릭하면 삭제됩니다</p>
              <TagList tags={tags} />
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <label htmlFor="activityTitle">계획서</label>
              <div>
                <MdEditor
                  style={{ height: '500px', width: '100%' }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={handleEditorChange}
                  placeholder="마크다운 형식으로 작성해주세요"
                />
                <ButtonContainer>
                  <ActionButton>파일 첨부</ActionButton>
                </ButtonContainer>
              </div>
            </Item>
          </ItemContainer>
          <StyledActionButton>제출</StyledActionButton>
        </StyledForm>
      </ActivityAdminContainer>
    </ActivityAdminBlock>
  );
};

export default ActivityAdmin;
