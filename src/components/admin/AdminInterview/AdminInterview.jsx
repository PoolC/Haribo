import React, { useEffect, useState } from 'react';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import {
  IntervieweeList,
  StyledDateBlock,
  StyledTimeBlock,
  StyledTimeList,
  TimeBlockCapacity,
  TimeBlockTime,
} from './AdminInterview.styles';
import Spinner from '../../common/Spinner/Spinner';
import { TitleContainer } from '../AdminBook/AdminBook.styles';

const Interviewee = ({ interviewee }) => {
  console.log(interviewee);
  return (
    <IntervieweeList>
      <div>
        <span className="admin-interview-label">이름 </span> {interviewee.name}
      </div>
      <div>
        <span className="admin-interview-label">학번 </span>{' '}
        {interviewee.studentId}
      </div>
      <div>
        <span className="admin-interview-label">학과 </span>{' '}
        {interviewee.department}
      </div>
      <div>
        <span className="admin-interview-label">연락처 </span>{' '}
        {interviewee.phoneNumber}
      </div>
    </IntervieweeList>
  );
};

const TimeBlock = ({ startTime, endTime, capacity, num, interviewees }) => {
  console.log(interviewees);
  return (
    <StyledTimeBlock>
      <TimeBlockTime>
        {startTime} ~ {endTime}
      </TimeBlockTime>
      <TimeBlockCapacity>
        {num}명/{capacity}명
      </TimeBlockCapacity>
      {interviewees.map((i) => (
        <Interviewee key={i.loginId} interviewee={i} />
      ))}
    </StyledTimeBlock>
  );
};

const DateBlock = ({ data }) => {
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
          />
        ))}
      </StyledTimeList>
    </>
  );
};

const AdminInterview = ({ loading, data }) => {
  return (
    <WhiteNarrowBlock>
      <TitleContainer>면접 신청 조회</TitleContainer>
      {loading && <Spinner />}
      {!loading && (
        <>
          {data?.data?.map((d) => (
            <DateBlock key={d.date} data={d} />
          ))}
        </>
      )}
    </WhiteNarrowBlock>
  );
};

export default AdminInterview;
