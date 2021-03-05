import React from 'react';
import MemberCard from '../MemberCard/MemberCard';
import { MemberListBlock, MemberListContainer, MemberListHeader, StyledMemberList } from './MemberList.styles';

const MemberList = ({ members }) => {
  return (
    <MemberListBlock>
      <MemberListContainer>
        <MemberListHeader>
          <h2 className="member_list_title">회원 목록</h2>
        </MemberListHeader>
        <StyledMemberList>
          {members.map((member) => (
            <MemberCard key={member.loginID} member={member} />
          ))}
        </StyledMemberList>
      </MemberListContainer>
    </MemberListBlock>
  );
};

export default MemberList;
