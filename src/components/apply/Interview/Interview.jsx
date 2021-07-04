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

const TimeBlock = ({ startTime, endTime, capacity, num }) => {
  return (
    <StyledTimeBlock>
      <TimeBlockTime>
        {startTime} ~ {endTime}
      </TimeBlockTime>
      <TimeBlockCapacity>
        {num}명/{capacity}명
      </TimeBlockCapacity>
      {capacity > num && (
        <div>
          <ActionButton>신청</ActionButton>
        </div>
      )}
      {capacity === num && (
        <div>
          <DisabledActionButton>마감</DisabledActionButton>
        </div>
      )}
    </StyledTimeBlock>
  );
};

const DateBlock = ({ capacity, data }) => {
  return (
    <>
      <StyledDateBlock>{data?.date}</StyledDateBlock>
      <StyledTimeList>
        {data?.slots.map((d) => (
          <TimeBlock
            key={d.id}
            startTime={d.startTime}
            endTime={d.endTime}
            capacity={capacity}
            num={d.num}
          />
        ))}
      </StyledTimeList>
    </>
  );
};

const Interview = ({ loading, data }) => {
  const capacity = 3;

  return (
    <Block>
      <WhiteBlock>
        <h2 className="block_title">면접 시간 제출</h2>
        {loading && <Spinner />}
        {!loading && (
          <>
            {data?.map((d) => (
              <DateBlock key={d.date} capacity={capacity} data={d} />
            ))}
          </>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default Interview;
