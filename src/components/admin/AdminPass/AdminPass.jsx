import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import {
  ContentsContainer,
  CurrentLimit,
  MemberListRow,
  StyledForm,
  StyledInput,
  Table,
  TableHead,
  TitleContainer,
} from './AdminPass.styles';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';

const AdminPass = ({
  members,
  minimumLimit,
  onUpdateMinPassStandard,
  onChangeExcepted,
}) => {
  return (
    <WhiteNarrowBlock>
      <TitleContainer>최소활동기준 관리</TitleContainer>
      <ContentsContainer>
        <CurrentLimit>현재 최소 활동 기준: {minimumLimit} 시간</CurrentLimit>
        <StyledForm>
          <StyledInput type="number" placeholder="ex) 6" />
          <span>시간으로</span>
          <ActionButton>수정</ActionButton>
        </StyledForm>
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
            {members.map((member) => (
              <MemberListRow key={member.id}>
                <td className="member-list-row">{member.name}</td>
                <td className="member-list-row">{member.studentId}</td>
                <td className="member-list-row">{member.department}</td>
                <td className="member-list-row">{member.isExcepted && 'o'}</td>
                <td className="member-list-row">{member.fullfilled && 'o'}</td>
                <td className="member-list-row">
                  {member.isExcepted || member.fullfilled ? 'o' : 'x'}
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
