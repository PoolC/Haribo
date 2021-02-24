import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';
import ActionButton from '../../common/Buttons/ActionButton';

const AdminMembersBlock = styled.div`
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
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  @media (max-width: 576px) {
    font-size: 0.5rem;
  }
  & > .member_list_head {
    flex: 1;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 10rem;
    word-break: break-all;
  }
  & > .email {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    max-width: 10rem;
  }
  & > .etc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.7;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const MemberListRow = styled.tr`
  cursor: default;
  display: flex;
  padding: 0.5rem 0;
  transition: 0.3s;
  text-align: center;
  & > .member-list-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 5px;
    line-height: 0.8rem;
    font-size: 0.8rem;
    max-width: 10rem;
    word-break: break-all;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
  }
  & > .email {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    max-width: 10rem;
    word-break: break-all;
  }
  & > .etc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.7;
  }
  & > .member-list-row-author {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 10px;
    min-width: 3rem;
  }
  & > .hide {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  &:hover {
    background-color: ${colors.gray[0]};
    transition: 0.3s;
  }
`;

const StyledActionButton = styled(ActionButton)`
  margin: 0;
  @media (max-width: 576px) {
    padding: 5px;
    font-size: 0.7rem;
  }
`;

const AdminMembers = ({ members }) => {
  return (
    <AdminMembersBlock>
      <TitleContainer>회원 관리</TitleContainer>
      <ContentsContainer>
        <Table>
          <thead>
            <TableHead>
              <th className="member_list_head name">이름</th>
              <th className="member_list_head stuendtId">학번</th>
              <th className="member_list_head loginId hide">아이디</th>
              <th className="member_list_head email hide">이메일</th>
              <th className="member_list_head phone hide">연락처</th>
              <th className="member_list_head etc">승인</th>
              <th className="member_list_head">동작</th>
              <th className="member_list_head etc">관리자</th>
              <th className="member_list_head">동작</th>
            </TableHead>
          </thead>
          <tbody>
            {members.map((member) => (
              <MemberListRow key={member.id}>
                <td className="member-list-row">{member.name}</td>
                <td className="member-list-row stuendtId">
                  {member.studentId}
                </td>
                <td className="member-list-row loginId hide">
                  {member.loginId}
                </td>
                <td className="member-list-row email hide">{member.email}</td>
                <td className="member-list-row phone hide">
                  {member.phoneNumber}
                </td>
                <td className="member-list-row etc">
                  {member.isActivated ? 'o' : 'x'}
                </td>
                <td className="member-list-row">
                  <StyledActionButton>
                    {member.isActivated ? '탈퇴' : '승인'}
                  </StyledActionButton>
                </td>
                <td className="member-list-row etc">
                  {member.isAdmin ? 'o' : 'x'}
                </td>
                <td className="member-list-row">
                  <StyledActionButton>
                    {member.isAdmin ? '해제' : '임명'}
                  </StyledActionButton>
                </td>
              </MemberListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </AdminMembersBlock>
  );
};

export default AdminMembers;
