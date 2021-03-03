import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const SessionCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px 0 10px 0;
  list-style: none;
`;

const SessionDivider = styled.div`
  margin-top: 30px;
  width: 50px;
  height: 1px;
  background-color: ${colors.mint[1]};
`;

const SessionNumber = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const Description = styled.p``;

const AttendanceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    font-size: 0.9rem;
    margin: 10px 0;
    font-weight: 500;
  }
`;

const Attendance = styled.li`
  font-size: 0.8rem;
  margin: 2px;
  font-weight: 300;
  list-style: none;
`;

const Session = ({ session, memberInfo, activityID, attendance, host }) => {
  const { id, description, date, sessionNumber } = session;
  const members = attendance
    .filter((a) => a.attended === true)
    .map((a) => a.member);
  const {
    status: { isLogin },
    user: { memberId },
  } = memberInfo;

  return (
    <>
      <SessionCard>
        <SessionNumber>{sessionNumber}회차</SessionNumber>
        <Date>{date}</Date>
        <Description>{description}</Description>
        {members && (
          <AttendanceList>
            <h5>[출석 인원]</h5>
            {members.map((member) => (
              <Attendance key={member.loginID}>{member.name}</Attendance>
            ))}
          </AttendanceList>
        )}
      </SessionCard>
      {isLogin && host.loginID === memberId && (
        <ActionButton to={`/${MENU.ACTIVITY}/${activityID}/attendance/${id}`}>
          수정
        </ActionButton>
      )}
      <SessionDivider />
    </>
  );
};

export default Session;
