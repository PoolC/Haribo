import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';
import React from 'react';
import styled from 'styled-components';

const AdminPassBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  & > thead {
    padding: 0;
    margin: 0;
  }
  & > tbody {
    width: 100%;
  }
`;

const TableHead = styled.tr`
  cursor: default;
  display: flex;
  width: 100%;
  background-color: ${colors.mint[0]};
  margin: 0;
  padding: 0.8rem 0px;
  font-size: 0.9rem;
  & > .member_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MemberListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  & > .member-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    line-height: 1.5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

const StyledForm = styled.form`
  margin-bottom: 0.5rem;
  & > label {
    margin-right: 0.5rem;
  }
  & > span {
    margin-left: 0.5rem;
  }
`;

const StyledInput = styled.input`
  outline: 0;
  height: 1.8rem;
  width: 3rem;
`;

const CurrentLimit = styled.div`
  margin-bottom: 0.5rem;
`;

const AdminPass = ({ members, minimumLimit }) => {
  return (
    <AdminPassBlock>
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
    </AdminPassBlock>
  );
};

export default AdminPass;
