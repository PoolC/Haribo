import React, { useState } from 'react';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import ActionButton from '../../common/Buttons/ActionButton';
import Spinner from '../../common/Spinner/Spinner';
import { TitleContainer } from '../AdminBook/AdminBook.styles';
import { notEmptyValidation } from '../../../lib/utils/validation';
import {
  Form,
  StyledCapacityForm,
  StyledCapacityInput,
  StyledDateForm,
  StyledDateInput,
  StyledDateTimeForm,
  StyledInterviewForm,
  StyledLabel,
  StyledTimeForm,
  StyledTimeInput,
  TimeCapacityButtonContainer,
  StyledDiv,
  StyledTimeFormList,
} from './AdminInterviewTime.styles';
import useInput from '../../../hooks/useInput';
import { StyledDeleteButton } from '../../activity/ActivityCard/ActivityCard.styles';
import { StyledButton } from '../../board/Post/Post.styles';

const DateTimeForm = ({
  id,
  startTime,
  endTime,
  capacity,
  currentIntervieweesCount,
}) => {
  const [start, onChangeStart] = useInput(
    startTime ? startTime : '',
    notEmptyValidation,
  );
  const [end, onChangeEnd] = useInput(
    endTime ? endTime : '',
    notEmptyValidation,
  );
  const [capa, onChangeCapa] = useInput(
    capacity ? capacity : '',
    notEmptyValidation,
  );
  return (
    <StyledDateTimeForm>
      <StyledTimeForm>
        <StyledLabel htmlFor="interview-start-time">시작 시간</StyledLabel>
        <StyledTimeInput
          type="time"
          name="interview-start-time"
          id=""
          value={start}
          onChange={onChangeStart}
        />
      </StyledTimeForm>
      <StyledTimeForm>
        <StyledLabel htmlFor="interview-end-time">종료 시간</StyledLabel>
        <StyledTimeInput
          type="time"
          name="interview-start-time"
          id=""
          value={end}
          onChange={onChangeEnd}
        />
      </StyledTimeForm>
      <StyledCapacityForm>
        현재 신청 인원 {currentIntervieweesCount} 명
      </StyledCapacityForm>
      <StyledCapacityForm>
        <StyledLabel htmlFor="interview-capacity">정원</StyledLabel>
        <StyledCapacityInput
          type="number"
          name="interview-capacity"
          id=""
          value={capa}
          onChange={onChangeCapa}
        />
        <span>명</span>
      </StyledCapacityForm>
      <TimeCapacityButtonContainer>
        <StyledButton>제출</StyledButton>
        <StyledDeleteButton>삭제</StyledDeleteButton>
      </TimeCapacityButtonContainer>
    </StyledDateTimeForm>
  );
};

const InterviewForm = ({ data }) => {
  const [date, onChangeDate] = useInput(
    data ? data.date : '',
    notEmptyValidation,
  );
  const [slots, setSlots] = useState(data ? data.slots : []);
  const onAddTime = (e) => {
    e.preventDefault();
    setSlots([
      ...slots,
      {
        startTime: '',
        endTime: '',
        capacity: 0,
        interviewees: [],
      },
    ]);
  };
  return (
    <StyledInterviewForm>
      <StyledDateForm>
        <StyledLabel htmlFor="interview-date">날짜</StyledLabel>
        <StyledDateInput
          type="date"
          htmlFor="interview-date"
          value={date}
          onChange={onChangeDate}
        />
      </StyledDateForm>
      <StyledTimeFormList>
        {slots.map((s) => (
          <DateTimeForm
            key={date + s.startTime + s.endTime}
            id={s.id}
            startTime={s.startTime}
            endTime={s.endTime}
            capacity={s.capacity}
            currentIntervieweesCount={s.interviewees.length}
          />
        ))}
      </StyledTimeFormList>
      <ActionButton onClick={onAddTime}>시간 추가</ActionButton>
    </StyledInterviewForm>
  );
};

const AdminInterviewTime = ({ data, loading, setData }) => {
  const onAddDate = (e) => {
    e.preventDefault();
    setData([...data, { date: '', slots: [] }]);
  };
  return (
    <WhiteNarrowBlock>
      <TitleContainer>면접 시간 관리</TitleContainer>
      <StyledDiv>작성 후 '제출' 버튼을 꼭 눌러주세요.</StyledDiv>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Form>
            {data?.map((d) => (
              <InterviewForm key={d.date} data={d} />
            ))}
          </Form>
          <ActionButton onClick={onAddDate}>날짜 추가</ActionButton>
        </>
      )}
      {/* <StyledActionButton>제출</StyledActionButton> */}
    </WhiteNarrowBlock>
  );
};

export default AdminInterviewTime;
