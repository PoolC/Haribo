import React from 'react';
import { MENU } from '../../../constants/menus';
import profileImagePlaceholders from '../../../constants/profileImagePlaceholders';
import colors from '../../../lib/styles/colors';
import getFileUrl from '../../../lib/utils/getFileUrl';
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
                ? getFileUrl(profileImageURL)
                : getFileUrl(profileImagePlaceholders[randomNumber(5)])
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
