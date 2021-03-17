import React from 'react';
import useInput from '../../../hooks/useInput';
import { notEmptyValidation } from '../../../lib/utils/validation';
import { WhiteNarrowBlock } from '../../../styles/common/Block.styles';
import Input from '../../common/Input/Input';
import {
  MemberSearchForm,
  StyledSearchActionButton,
} from '../AdminProjectForm/AdminProjectForm.styles';
import {
  ContentsContainer,
  MemberListRow,
  StyledActionButton,
  Table,
  TableHead,
  TitleContainer,
  StyledSelect,
  SearchHeader,
  SearchResult,
} from './AdminMember.styles';

const MemberTableHead = () => {
  return (
    <thead>
      <TableHead>
        <th className="member_list_head name">이름</th>
        <th className="member_list_head department hide">학과</th>
        <th className="member_list_head studentId">학번</th>
        <th className="member_list_head loginId hide">아이디</th>
        <th className="member_list_head email hide">이메일</th>
        <th className="member_list_head phone hide">연락처</th>
        <th className="member_list_head isActivated">승인</th>
        <th className="member_list_head small-button">동작</th>
        <th className="member_list_head isAdmin">관리자</th>
        <th className="member_list_head small-button">동작</th>
        <th className="member_list_head status">상태</th>
      </TableHead>
    </thead>
  );
};

const Member = ({
  member,
  handleAcceptMember,
  handleWithdrawMember,
  handleToggleAdmin,
  handleUpdateMemberStatus,
}) => {
  const [status, onChangeStatus] = useInput(
    member.status ? member.status : 'MEMBER',
    notEmptyValidation,
  );
  return (
    <MemberListRow key={member.loginID}>
      <td className="member-list-row name">{member.name}</td>
      <td className="member-list-row department hide">{member.department}</td>
      <td className="member-list-row studentId">{member.studentID}</td>
      <td className="member-list-row loginId hide">{member.loginID}</td>
      <td className="member-list-row email hide">{member.email}</td>
      <td className="member-list-row phone hide">{member.phoneNumber}</td>
      <td className="member-list-row isActivated">
        {member.isActivated ? 'o' : 'x'}
      </td>
      <td className="member-list-row small-button">
        {member.isActivated ? (
          <StyledActionButton
            onClick={(e) => handleWithdrawMember(e, member.loginID)}
            className="delete"
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
      <td className="member-list-row isAdmin">{member.isAdmin ? 'o' : 'x'}</td>
      <td className="member-list-row small-button">
        {member.isActivated &&
          (member.isAdmin ? (
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
          ))}
      </td>
      <td className="member-list-row status">
        {member.isActivated && (
          <>
            <StyledSelect value={status} onChange={onChangeStatus}>
              <option value="UNACCEPTED">승인 전</option>
              <option value="EXPELLED">자격상실</option>
              <option value="MEMBER">일반회원</option>
              <option value="GRADUATED">졸업회원</option>
            </StyledSelect>
            <StyledActionButton
              onClick={(e) =>
                handleUpdateMemberStatus(e, member.loginID, status)
              }
              style={{ marginLeft: '0.5rem' }}
            >
              수정
            </StyledActionButton>
          </>
        )}
      </td>
    </MemberListRow>
  );
};

const AdminMember = ({
  members,
  onAcceptMember,
  onWithdrawMember,
  onToggleAdmin,
  onUpdateMemberStatus,
  onSearchMember,
  searchMembers,
}) => {
  const [searchMember, onChangeSearchMember] = useInput('', notEmptyValidation);

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
  const handleUpdateMemberStatus = (e, loginID, status) => {
    e.preventDefault();
    onUpdateMemberStatus({ loginID, status });
  };
  const onClickSearch = (e) => {
    e.preventDefault();
    onSearchMember(searchMember);
    e.target.value = '';
    onChangeSearchMember(e);
  };

  return (
    <WhiteNarrowBlock>
      <TitleContainer>회원 관리</TitleContainer>
      <ContentsContainer>
        <MemberSearchForm>
          <Input
            valueText={searchMember}
            labelText=""
            typeText="text"
            nameText="id"
            onChangeFunc={onChangeSearchMember}
            placeholderText="회원 이름으로 검색"
          />
          <StyledSearchActionButton onClick={onClickSearch}>
            검색
          </StyledSearchActionButton>
        </MemberSearchForm>
        <SearchHeader>회원 검색 결과</SearchHeader>
        {searchMembers.length === 0 && (
          <SearchResult>검색 결과가 없습니다</SearchResult>
        )}
        {searchMembers.length !== 0 && (
          <Table>
            <MemberTableHead />
            <tbody>
              {searchMembers.map((member) => (
                <Member
                  key={member.loginID}
                  member={member}
                  handleAcceptMember={handleAcceptMember}
                  handleWithdrawMember={handleWithdrawMember}
                  handleToggleAdmin={handleToggleAdmin}
                  handleUpdateMemberStatus={handleUpdateMemberStatus}
                />
              ))}
            </tbody>
          </Table>
        )}
        <Table>
          <MemberTableHead />
          <tbody>
            {members.map((member) => (
              <Member
                key={member.loginID}
                member={member}
                handleAcceptMember={handleAcceptMember}
                handleWithdrawMember={handleWithdrawMember}
                handleToggleAdmin={handleToggleAdmin}
                handleUpdateMemberStatus={handleUpdateMemberStatus}
              />
            ))}
          </tbody>
        </Table>
      </ContentsContainer>
    </WhiteNarrowBlock>
  );
};

export default AdminMember;
