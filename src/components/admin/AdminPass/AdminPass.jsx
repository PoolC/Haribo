import ActionButton from '../../common/Buttons/ActionButton';
import React, { useState } from 'react';
import {
  ContentsContainer,
  ExpellActionButton,
  MemberListRow,
  StyledForm,
  StyledInput,
  Table,
  TableHead,
  TitleContainer,
} from './AdminPass.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';

const Member = ({
  member,
  minimumLimit,
  handleChangeExcepted,
  handleWithdraw,
}) => {
  const [isExpelled, setIsExpelled] = useState(
    member.member.role === 'EXPELLED',
  );
  return (
    <MemberListRow key={member.member.loginID}>
      <td className="member-list-row name">{member.member.name}</td>
      <td className="member-list-row hide studentId">
        {member.member.studentID}
      </td>
      <td className="member-list-row hide department">
        {member.member.department}
      </td>
      <td className="member-list-row hour">{member.hour}</td>
      <td className="member-list-row isExcepted">{member.isExcepted && 'o'}</td>
      <td className="member-list-row fullfill">
        {member.hour >= minimumLimit && 'o'}
      </td>
      <td className="member-list-row pass">
        {member.isExcepted || member.hour >= minimumLimit ? 'o' : 'x'}
      </td>
      <td className="member-list-row pass-button">
        <ActionButton
          onClick={() => {
            handleChangeExcepted(member.member.loginID, member.isExcepted);
          }}
        >
          {member.isExcepted ? '해제' : '면제'}
        </ActionButton>
      </td>
      <td className="member-list-row out">
        {!isExpelled && (
          <ExpellActionButton
            onClick={() => {
              handleWithdraw(member.member.loginID, setIsExpelled);
            }}
          >
            박탈
          </ExpellActionButton>
        )}
        {isExpelled && <p>자격 박탈됨</p>}
      </td>
    </MemberListRow>
  );
};

const AdminPass = ({
  members,
  onSubmitSemester,
  onChangeExcepted,
  onWithdraw,
}) => {
  const [semester, onChangeSemester] = useInput('', notEmptyValidation);
  const [minimumLimit, onChangeMinimumLimit] = useInput('', notEmptyValidation);

  const handleSubmitSemester = (e) => {
    e.preventDefault();
    onSubmitSemester(semester);
  };

  return (
    <WhiteNarrowBlock>
      <TitleContainer>최소활동기준 관리</TitleContainer>
      <ContentsContainer>
        <StyledForm style={{ marginBottom: '2rem' }}>
          <label style={{ marginBottom: '0.5rem' }}>이번 학기</label>
          <StyledInput
            value={semester}
            onChange={onChangeSemester}
            type="text"
            placeholder="ex) 2021-1"
            style={{ width: '7rem' }}
          />
          <label style={{ marginBottom: '0.5rem' }}>최소 활동 기준</label>
          <div>
            <StyledInput
              value={minimumLimit}
              onChange={onChangeMinimumLimit}
              type="number"
              placeholder="ex) 6"
            />
            <span>시간</span>
          </div>
          <ActionButton onClick={handleSubmitSemester}>입력</ActionButton>
        </StyledForm>
        <h3>회원 자격 상실 예정자 목록</h3>
        <Table>
          <thead>
            <TableHead>
              <th className="member_list_head name">이름</th>
              <th className="member_list_head hide studentId">학번</th>
              <th className="member_list_head hide department">학과</th>
              <th className="member_list_head hour">총 활동 시간</th>
              <th className="member_list_head isExcepted">면제</th>
              <th className="member_list_head fullfill">기준 만족</th>
              <th className="member_list_head pass">자격 유지</th>
              <th className="member_list_head pass-button">동작</th>
              <th className="member_list_head out">자격박탈</th>
            </TableHead>
          </thead>
          <tbody>
            {members?.map(
              (member) =>
                !member.isExcepted &&
                member.hour < minimumLimit && (
                  <Member
                    key={member.member.loginID}
                    member={member}
                    minimumLimit={minimumLimit}
                    handleChangeExcepted={onChangeExcepted}
                    handleWithdraw={onWithdraw}
                  />
                ),
            )}
          </tbody>
        </Table>
        <h3>전체 회원 목록</h3>
        <Table>
          <thead>
            <TableHead>
              <th className="member_list_head">이름</th>
              <th className="member_list_head hide">학번</th>
              <th className="member_list_head hide">학과</th>
              <th className="member_list_head">총 활동 시간</th>
              <th className="member_list_head">면제</th>
              <th className="member_list_head">기준 만족</th>
              <th className="member_list_head">자격 유지</th>
              <th className="member_list_head">동작</th>
              <th className="member_list_head out">자격박탈</th>
            </TableHead>
          </thead>
          <tbody>
            {members?.map((member) => (
              <Member
                key={member.member.loginID}
                member={member}
                minimumLimit={minimumLimit}
                handleChangeExcepted={onChangeExcepted}
                handleWithdraw={onWithdraw}
              />
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </WhiteNarrowBlock>
  );
};

export default AdminPass;
