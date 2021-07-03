import React from 'react';
import { Block, WhiteBlock } from '../../../styles/common/Block.styles';
import Spinner from '../../common/Spinner/Spinner';
import MemberCard from '../MemberCard/MemberCard';
import { MemberListHeader, StyledMemberList } from './MemberList.styles';

const MemberList = ({ members, loading }) => {
  return (
    <Block>
      <WhiteBlock>
        <MemberListHeader>
          <h2 className="member_list_title">회원 목록</h2>
        </MemberListHeader>
        {loading && <Spinner />}
        {!loading && (
          <StyledMemberList>
            {members.map((member) => (
              <MemberCard key={member.loginID} member={member} />
            ))}
          </StyledMemberList>
        )}
      </WhiteBlock>
    </Block>
  );
};

export default MemberList;
