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
import { getHourMinuteString } from '../../../lib/utils/getDateString';
import InterviewSelectModal from './InterviewModal/InterviewSelectModal';
import InterviewCancelModal from './InterviewModal/InterviewCancelModal';

const TimeBlock = ({
  date,
  startTime,
  endTime,
  capacity,
  num,
  interviewees,
  loginId,
  mySlotId,
  id,
  handleSelectInterviewTime,
  handleCancelInterviewTime,
}) => {
  const [selectModalVisible, setSelectModalVisible] = useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);

  const onSelectInterviewTime = (e) => {
    e.preventDefault();
    setSelectModalVisible(true);
    //handleSelectInterviewTime({ slotId: id });
  };

  const onConfirmSelect = (e) => {
    e.preventDefault();
    handleSelectInterviewTime({ slotId: id });
    setSelectModalVisible(false);
  };

  const onCloseSelectModal = (e) => {
    e.preventDefault();
    setSelectModalVisible(false);
  };

  const onCancelInterviewTime = (e) => {
    e.preventDefault();
    setCancelModalVisible(true);
    //handleCancelInterviewTime({ slotId: id });
  };

  const onConfirmCancel = (e) => {
    e.preventDefault();
    handleCancelInterviewTime({ slotId: id });
    setCancelModalVisible(false);
  };

  const onCloseCancelModal = (e) => {
    e.preventDefault();
    setCancelModalVisible(false);
  };

  return (
    <>
      <InterviewSelectModal
        date={date}
        startTime={startTime}
        endTime={endTime}
        visible={selectModalVisible}
        onConfirm={onConfirmSelect}
        onCancel={onCloseSelectModal}
      />
      <InterviewCancelModal
        date={date}
        startTime={startTime}
        endTime={endTime}
        visible={cancelModalVisible}
        onConfirm={onConfirmCancel}
        onCancel={onCloseCancelModal}
      />
      <StyledTimeBlock>
        <TimeBlockTime>
          {getHourMinuteString(startTime)} ~ {getHourMinuteString(endTime)}
        </TimeBlockTime>
        <TimeBlockCapacity>
          {num}명/{capacity}명
        </TimeBlockCapacity>
        {mySlotId === null && capacity > num && (
          <div>
            <ActionButton onClick={onSelectInterviewTime}>신청</ActionButton>
          </div>
        )}
        {mySlotId !== id && capacity <= num && (
          <div>
            <DisabledActionButton>마감</DisabledActionButton>
          </div>
        )}
        {mySlotId === id && (
          <StyledDeleteButton onClick={onCancelInterviewTime}>
            취소
          </StyledDeleteButton>
        )}
      </StyledTimeBlock>
    </>
  );
};

const DateBlock = ({
  data,
  loginId,
  mySlotId,
  handleSelectInterviewTime,
  handleCancelInterviewTime,
}) => {
  return (
    <>
      <StyledDateBlock>{data?.date}</StyledDateBlock>
      <StyledTimeList>
        {data?.slots.map((d) => {
          return (
            <TimeBlock
              key={d.slotId}
              id={d.slotId}
              date={data?.date}
              startTime={d.startTime}
              endTime={d.endTime}
              capacity={d.capacity}
              num={d.interviewees.length}
              interviewees={d.interviewees}
              loginId={loginId}
              mySlotId={mySlotId}
              handleSelectInterviewTime={handleSelectInterviewTime}
              handleCancelInterviewTime={handleCancelInterviewTime}
            />
          );
        })}
      </StyledTimeList>
    </>
  );
};

const Interview = ({
  loading,
  data,
  mySlotId,
  handleSelectInterviewTime,
  handleCancelInterviewTime,
}) => {
  const member = useSelector((state) => state.auth);
  //const isLogin = member.status.isLogin;
  //const role = member.user.role;
  const loginId = member.user.memberId;

  return (
    <Block>
      <WhiteBlock>
        <h2 className="block_title">면접 시간 제출</h2>
        {loading && <Spinner />}
        {!loading && (
          <>
            {data?.map((d) => {
              return (
                <DateBlock
                  key={d.date}
                  data={d}
                  loginId={loginId}
                  mySlotId={mySlotId}
                  handleSelectInterviewTime={handleSelectInterviewTime}
                  handleCancelInterviewTime={handleCancelInterviewTime}
                />
              );
            })}
          </>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default Interview;
