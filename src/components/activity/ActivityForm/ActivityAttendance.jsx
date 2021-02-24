import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';

const ActivityAttendanceBlock = styled.div`
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

const ActivityDetailContainer = styled.div`
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

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const DateContainer = styled.div`
  margin-bottom: 30px;
`;

const Date = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    margin-bottom: 10px;
    font-weight: 700;
  }
  input {
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

const DescriptionContainer = styled.div`
  margin-bottom: 30px;
`;

const Description = styled.p`
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

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    color: ${colors.brown[0]};
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

const Members = styled.ul`
  margin-bottom: 30px;
`;

const Member = styled.li`
  display: flex;
  margin: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledActionButton = styled(ActionButton)`
  width: 160px;
`;

const ActivityAttendance = ({ activity }) => {
  const { id, title, count, members } = activity;
  const newSessionCount = count + 1;
  return (
    <ActivityAttendanceBlock>
      <ActivityDetailContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Title>[{newSessionCount}회차 출석체크]</Title>
        </TitleContainer>
        <StyledForm>
          <DateContainer>
            <Date>
              <label htmlFor="date">날짜</label>
              <p>
                2020년 10월 23일에 진행된 세미나의 경우, 2020-10-23 이라고 입력
              </p>
              <input type="date" name="date" placeholder="YYYY-MM-DD" />
            </Date>
          </DateContainer>
          <DescriptionContainer>
            <Description>
              <label htmlFor="description">내용</label>
              <p>예시: 파이썬의 변수에 대해 공부 / A 논문 스터디 등</p>
              <textarea
                rows="5"
                name="description"
                placeholder="이번 회차에서 공부한 내용"
              />
            </Description>
          </DescriptionContainer>
          <MemberContainer>
            <h2>참여 멤버 목록</h2>
            <p>출석한 인원만 체크해주세요.</p>
            <Members>
              {members.map((member) => (
                <Member>
                  <input type="checkbox" value={member.id} />
                  {member.name}
                </Member>
              ))}
            </Members>
          </MemberContainer>
          <StyledActionButton>제출</StyledActionButton>
        </StyledForm>
      </ActivityDetailContainer>
    </ActivityAttendanceBlock>
  );
};

export default ActivityAttendance;
