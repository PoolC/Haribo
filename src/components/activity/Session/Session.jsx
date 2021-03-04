import React from 'react';
import { MENU } from '../../../constants/menus';
import ActionButton from '../../common/Buttons/ActionButton';
import {
  Attendance,
  AttendanceList,
  Date,
  Description,
  SessionCard,
  SessionDivider,
  SessionNumber,
} from './Session.styles';

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
