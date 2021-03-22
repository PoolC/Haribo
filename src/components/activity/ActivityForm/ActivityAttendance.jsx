import React, { useRef, useState } from 'react';
import useInput from '../../../hooks/useInput';
import Input from '../../common/Input/Input';
import { notEmptyValidation } from '../../../lib/utils/validation';
import {
  Date,
  DateContainer,
  Description,
  DescriptionContainer,
  MemberBlock,
  MemberContainer,
  Members,
  StyledActionButton,
  StyledForm,
  Title,
  TitleContainer,
} from './ActivityAttendance.styles';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import Modal from '../../common/Modal/Modal';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

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
  errorMessage,
  buttons,
  errorModalVisible,
  onCloseErrorModal,
}) => {
  const { title } = activity;
  const editorRef = useRef();
  const newSessionCount = sessionNumber;

  const [date, onChangeDate] = useInput(
    activitySession ? activitySession.date : '',
    notEmptyValidation,
  );

  const [description, onChangeDescription] = useState(
    activitySession ? activitySession.description : '',
  );

  const [attendances, setAttendances] = useState(
    sessionAttendance
      ? sessionAttendance
          .filter((attendance) => attendance.attended === true)
          .map((attendance) => attendance.member)
      : [],
  );

  const handleCheckAttendance = (member, isChecked) => {
    if (!isChecked) {
      setAttendances([
        ...attendances,
        { name: member.name, loginID: member.loginID },
      ]);
      return;
    }
    setAttendances(
      attendances.filter((attendance) => attendance.loginID !== member.loginID),
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateSession({
      date,
      description,
      attendances,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    onCreateSession({
      sessionNumber,
      date,
      description,
      attendances,
    });
  };

  const onEditorChange = (e) => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();
    onChangeDescription(markdownContent);
  };

  return (
    <>
      <Modal
        contents={errorMessage}
        buttons={buttons}
        visible={errorModalVisible}
        onConfirm={onCloseErrorModal}
        onCancel={onCloseErrorModal}
      />
      <Block>
        <WhiteBlock>
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
                <Editor
                  initialEditType="wysiwyg"
                  initialValue={description}
                  ref={editorRef}
                  onChange={(e) => onEditorChange(e)}
                  style={{ width: '100%' }}
                />
              </Description>
            </DescriptionContainer>
            <MemberContainer>
              <h4>참여 멤버 목록</h4>
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
              <StyledActionButton onClick={handleUpdate}>
                수정
              </StyledActionButton>
            ) : (
              <StyledActionButton onClick={handleCreate}>
                제출
              </StyledActionButton>
            )}
          </StyledForm>
        </WhiteBlock>
      </Block>
    </>
  );
};

export default ActivityAttendance;
