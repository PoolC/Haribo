import React from 'react';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { randomNumber } from '../../lib/utils/random';

const MemberListBlock = styled.div`
  position: relative;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0px 0 50px 0;
`;

const MemberListContainer = styled.div`
  width: 100%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  border-radius: 50px;
  padding: 40px 40px 60px 40px;
`;

const MemberListHeader = styled.header`
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 50px;
  & > .member_list_title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-weight: 700;
  }
`;

const StyledMemberList = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MemberItem = styled.li`
  margin: 5px;
`;

const MemberCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 240px;
  height: 90px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.085);
  padding: 0px 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;

const MemberCardThumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 20px 0 10px;
`;

const MemberCardText = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberCardName = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const MemberCardMajor = styled.p`
  display: flex;
  font-size: 0.8rem;
  font-weight: 300;
`;

const MemberCardStatus = styled.p`
  display: flex;
  font-size: 0.8rem;
  font-weight: 300;
`;

const MemberList = ({ members }) => {
  return (
    <MemberListBlock>
      <MemberListContainer>
        <MemberListHeader>
          <h2 className="member_list_title">회원 목록</h2>
        </MemberListHeader>
        <StyledMemberList>
          {members.map((member) => (
            <MemberItem>
              <MemberCard
                style={{
                  background: colors.mint[randomNumber(colors.mint.length)],
                }}
              >
                <MemberCardThumbnail
                  src={member.profileURL}
                  alt="member_thumbnail"
                />
                <MemberCardText>
                  <MemberCardName>{member.name}</MemberCardName>
                  <MemberCardMajor>{member.major}</MemberCardMajor>
                  <MemberCardStatus>PoolC 임원</MemberCardStatus>
                </MemberCardText>
              </MemberCard>
            </MemberItem>
          ))}
        </StyledMemberList>
      </MemberListContainer>
    </MemberListBlock>
  );
};

export default MemberList;
