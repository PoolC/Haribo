import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import {
  ContentsContainer,
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

const AdminPass = ({
  members,
  onSubmitSemester,
  onUpdateMinPassStandard,
  onChangeExcepted,
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
              <th className="member_list_head">이름</th>
              <th className="member_list_head">학번</th>
              <th className="member_list_head">학과</th>
              <th className="member_list_head">면제</th>
              <th className="member_list_head">최소 활동 기준 만족</th>
              <th className="member_list_head">회원 자격 유지</th>
              <th className="member_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {members?.map(
              (member) =>
                !member.isExcepted &&
                member.hour < minimumLimit && (
                  <MemberListRow key={member.member.loginID}>
                    <td className="member-list-row">{member.member.name}</td>
                    <td className="member-list-row">
                      {member.member.studentId}
                    </td>
                    <td className="member-list-row">
                      {member.member.department}
                    </td>
                    <td className="member-list-row">
                      {member.isExcepted && 'o'}
                    </td>
                    <td className="member-list-row">
                      {member.hour >= minimumLimit && 'o'}
                    </td>
                    <td className="member-list-row">
                      {member.isExcepted || member.hour >= minimumLimit
                        ? 'o'
                        : 'x'}
                    </td>
                    <td className="member-list-row">
                      <ActionButton>
                        {member.isExcepted ? '해제' : '면제'}
                      </ActionButton>
                    </td>
                  </MemberListRow>
                ),
            )}
          </tbody>
        </Table>
        <h3>전체 회원 목록</h3>
        <Table>
          <thead>
            <TableHead>
              <th className="member_list_head">이름</th>
              <th className="member_list_head">학번</th>
              <th className="member_list_head">학과</th>
              <th className="member_list_head">면제</th>
              <th className="member_list_head">최소 활동 기준 만족</th>
              <th className="member_list_head">회원 자격 유지</th>
              <th className="member_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {members?.map((member) => (
              <MemberListRow key={member.member.loginID}>
                <td className="member-list-row">{member.member.name}</td>
                <td className="member-list-row">{member.member.studentId}</td>
                <td className="member-list-row">{member.member.department}</td>
                <td className="member-list-row">{member.isExcepted && 'o'}</td>
                <td className="member-list-row">
                  {member.hour >= minimumLimit && 'o'}
                </td>
                <td className="member-list-row">
                  {member.isExcepted || member.hour >= minimumLimit ? 'o' : 'x'}
                </td>
                <td className="member-list-row">
                  <ActionButton>
                    {member.isExcepted ? '해제' : '면제'}
                  </ActionButton>
                </td>
              </MemberListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </WhiteNarrowBlock>
  );
};

export default AdminPass;
