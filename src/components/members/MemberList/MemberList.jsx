import React from 'react';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import MemberCard from '../MemberCard/MemberCard';
import { MemberListHeader, StyledMemberList } from './MemberList.styles';

const MemberList = ({ members }) => {
  return (
    <Block>
      <WhiteBlock>
        <MemberListHeader>
          <h2 className="member_list_title">회원 목록</h2>
        </MemberListHeader>
        <StyledMemberList>
          {members.map((member) => (
            <MemberCard key={member.loginID} member={member} />
          ))}
        </StyledMemberList>
      </WhiteBlock>
    </Block>
  );
};

export default MemberList;
