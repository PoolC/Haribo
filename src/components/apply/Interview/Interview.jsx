import React, { useState } from 'react';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import Spinner from '../../common/Spinner/Spinner';
import {
  StyledDateBlock,
  StyledTimeList,
  StyledTimeBlock,
  TimeBlockTime,
  TimeBlockCapacity,
  DisabledActionButton,
} from './Interview.styles';
import ActionButton from '../../common/Buttons/ActionButton';
import { useSelector } from 'react-redux';
import { StyledDeleteButton } from '../../activity/ActivityCard/ActivityCard.styles';

const TimeBlock = ({
  startTime,
  endTime,
  capacity,
  num,
  interviewees,
  loginId,
  mySlotId,
  id,
}) => {
  console.log(interviewees);
  const intervieweeIds = interviewees?.map((i) => i.loginId);
  console.log(intervieweeIds);
  console.log(intervieweeIds.includes(loginId));
  console.log(loginId);
  return (
    <StyledTimeBlock>
      <TimeBlockTime>
        {startTime} ~ {endTime}
      </TimeBlockTime>
      <TimeBlockCapacity>
        {num}명/{capacity}명
      </TimeBlockCapacity>
      {mySlotId === null && capacity > num && (
        <div>
          <ActionButton>신청</ActionButton>
        </div>
      )}
      {!intervieweeIds.includes(loginId) && capacity <= num && (
        <div>
          <DisabledActionButton>마감</DisabledActionButton>
        </div>
      )}
      {intervieweeIds.includes(loginId) && (
        <StyledDeleteButton>취소</StyledDeleteButton>
      )}
    </StyledTimeBlock>
  );
};

const DateBlock = ({ data, loginId, mySlotId }) => {
  return (
    <>
      <StyledDateBlock>{data?.date}</StyledDateBlock>
      <StyledTimeList>
        {data?.slots.map((d) => (
          <TimeBlock
            key={d.id}
            id={d.id}
            startTime={d.startTime}
            endTime={d.endTime}
            capacity={d.capacity}
            num={d.interviewees.length}
            interviewees={d.interviewees}
            loginId={loginId}
            mySlotId={mySlotId}
          />
        ))}
      </StyledTimeList>
    </>
  );
};

const Interview = ({ loading, data }) => {
  const member = useSelector((state) => state.auth);
  const isLogin = member.status.isLogin;
  const role = member.user.role;
  const loginId = member.user.memberId;
  const mySlotId = data.mySlotId;
  console.log(member);
  console.log(data);

  return (
    <Block>
      <WhiteBlock>
        <h2 className="block_title">면접 시간 제출</h2>
        {loading && <Spinner />}
        {!loading && (
          <>
            {data?.data?.map((d) => (
              <DateBlock
                key={d.date}
                data={d}
                loginId={loginId}
                mySlotId={mySlotId}
              />
            ))}
          </>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default Interview;
