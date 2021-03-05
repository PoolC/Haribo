import React from 'react';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import {
  ContentsContainer,
  MemberListRow,
  StyledActionButton,
  Table,
  TableHead,
  TitleContainer,
} from './AdminMember.styles';

const AdminMember = ({
  members,
  onAcceptMember,
  onWithdrawMember,
  onToggleAdmin,
}) => {
  const handleWithdrawMember = (e, loginID) => {
    e.preventDefault();
    onWithdrawMember(loginID);
  };
  const handleAcceptMember = (e, loginID) => {
    e.preventDefault();
    onAcceptMember(loginID);
  };
  const handleToggleAdmin = (e, loginID, isAdmin) => {
    e.preventDefault();
    onToggleAdmin({ loginID, isAdmin });
  };

  return (
    <WhiteNarrowBlock>
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
              <MemberListRow key={member.loginID}>
                <td className="member-list-row">{member.name}</td>
                <td className="member-list-row stuendtId">
                  {member.studentID}
                </td>
                <td className="member-list-row loginId hide">
                  {member.loginID}
                </td>
                <td className="member-list-row email hide">{member.email}</td>
                <td className="member-list-row phone hide">
                  {member.phoneNumber}
                </td>
                <td className="member-list-row etc">
                  {member.isActivated ? 'o' : 'x'}
                </td>
                <td className="member-list-row">
                  {member.isActivated ? (
                    <StyledActionButton
                      onClick={(e) => handleWithdrawMember(e, member.loginID)}
                    >
                      탈퇴
                    </StyledActionButton>
                  ) : (
                    <StyledActionButton
                      onClick={(e) => handleAcceptMember(e, member.loginID)}
                    >
                      승인
                    </StyledActionButton>
                  )}
                </td>
                <td className="member-list-row etc">
                  {member.isAdmin ? 'o' : 'x'}
                </td>
                <td className="member-list-row">
                  {member.isAdmin ? (
                    <StyledActionButton
                      onClick={(e) =>
                        handleToggleAdmin(e, member.loginID, member.isAdmin)
                      }
                    >
                      해제
                    </StyledActionButton>
                  ) : (
                    <StyledActionButton
                      onClick={(e) =>
                        handleToggleAdmin(e, member.loginID, member.isAdmin)
                      }
                    >
                      임명
                    </StyledActionButton>
                  )}
                </td>
              </MemberListRow>
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </WhiteNarrowBlock>
  );
};

export default AdminMember;
