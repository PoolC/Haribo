import React from 'react';
import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import { randomNumber } from '../../../lib/utils/random';
import {
  MemberCardBlock,
  MemberCardMajor,
  MemberCardName,
  MemberCardStatus,
  MemberCardText,
  MemberCardThumbnail,
  MemberItem,
  StyledLink,
} from './MemberCard.styles';

const MemberCard = ({ member }) => {
  const { loginID, name, department, isAdmin, profileImageURL } = member;
  return (
    <StyledLink to={`/${MENU.MEMBER}/${loginID}`}>
      <MemberCardBlock>
        <MemberItem
          style={{
            background: colors.mint[randomNumber(colors.mint.length)],
          }}
        >
          <MemberCardThumbnail
            src={
              profileImageURL
                ? profileImageURL
                : 'https://user-images.githubusercontent.com/48787170/111106105-c6fda680-8597-11eb-859a-5c695d5ef546.png'
            }
            alt="member_thumbnail"
          />
          <MemberCardText>
            <MemberCardName>
              {name}
              {isAdmin && <MemberCardStatus>PoolC 임원</MemberCardStatus>}
            </MemberCardName>
            <MemberCardMajor>{department}</MemberCardMajor>
          </MemberCardText>
        </MemberItem>
      </MemberCardBlock>
    </StyledLink>
  );
};

export default MemberCard;
