import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import Input from '../../common/Input/Input';
import { notEmptyValidation } from '../../../lib/utils/validation';

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

const Description = styled.div`
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

const MemberBlock = styled.li`
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

const Member = ({ member, attended, handleCheckAttendance }) => {
  const [isChecked, setIsChecked] = useState(attended ? attended : false);

  const handleCheck = (e) => {
    setIsChecked((isChecked) => !isChecked);
    handleCheckAttendance(member, isChecked);
  };

  return (
    <MemberBlock key={member.loginID}>
      <input
        type="checkbox"
        value={member.loginID}
        onChange={handleCheck}
        checked={isChecked}
      />
      {member.name}
    </MemberBlock>
  );
};

const ActivityAttendance = ({
  activity,
  activityMembers,
  activitySession,
  sessionNumber,
  sessionAttendance,
  onCreateSession,
  onUpdateSession,
}) => {
  console.log(sessionAttendance);
  const { title } = activity;
  const newSessionCount = sessionNumber;

  const [date, onChangeDate] = useInput(
    activitySession ? activitySession.date : '',
    notEmptyValidation,
  );

  const [description, onChangeDescription] = useInput(
    activitySession ? activitySession.description : '',
    notEmptyValidation,
  );

  const [attendances, setAttendances] = useState(
    sessionAttendance
      ? sessionAttendance
          .filter((attendance) => attendance.attended === true)
          .map((attendance) => attendance.member)
      : [],
  );

  const handleCheckAttendance = (member, isChecked) => {
    console.log(attendances);
    if (!isChecked) {
      setAttendances([
        ...attendances,
        { name: member.name, loginID: member.loginID },
      ]);
      console.log(attendances);
      return;
    }
    setAttendances(
      attendances.filter((attendance) => attendance.loginID !== member.loginID),
    );
    console.log(attendances);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(attendances);
    onUpdateSession({
      date,
      description,
      attendances,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(attendances);
    onCreateSession({
      sessionNumber,
      date,
      description,
      attendances,
    });
  };

  return (
    <ActivityAttendanceBlock>
      <ActivityDetailContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Title>
            [{newSessionCount}회차 출석체크{sessionAttendance && ' 수정'}]
          </Title>
        </TitleContainer>
        <StyledForm>
          <DateContainer>
            <Date>
              <Input
                valueText={date}
                labelText="날짜"
                typeText="date"
                nameText="date"
                onChangeFunc={onChangeDate}
                placeholderText="YYYY-MM-DD"
              />
            </Date>
          </DateContainer>
          <DescriptionContainer>
            <Description>
              <label htmlFor="description">내용</label>
              <p>예시: 파이썬의 변수에 대해 공부 / A 논문 스터디 등</p>
              <textarea
                value={description}
                onChange={onChangeDescription}
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
              {sessionAttendance
                ? sessionAttendance.map((attendance) => (
                    <Member
                      key={attendance.member.loginID}
                      member={attendance.member}
                      attended={attendance.attended}
                      handleCheckAttendance={handleCheckAttendance}
                    />
                  ))
                : activityMembers.map((member) => (
                    <Member
                      key={member.loginID}
                      member={member}
                      handleCheckAttendance={handleCheckAttendance}
                    />
                  ))}
            </Members>
          </MemberContainer>
          {sessionAttendance ? (
            <StyledActionButton onClick={handleUpdate}>수정</StyledActionButton>
          ) : (
            <StyledActionButton onClick={handleCreate}>제출</StyledActionButton>
          )}
        </StyledForm>
      </ActivityDetailContainer>
    </ActivityAttendanceBlock>
  );
};

export default ActivityAttendance;
