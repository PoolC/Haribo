import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../../constants/menus';
import colors from '../../../lib/styles/colors';
import LinkButton from '../../common/Buttons/LinkButton';

const IntroMenuBlock = styled.div`
  width: 12rem;
  margin: 0 20px 20px 0;
  padding: 0;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const IntroMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.035);
  border-radius: 50px;
  padding: 30px 30px;
  margin: 0;
  @media (max-width: 576px) {
    align-items: center;
  }
`;

const IntroMenuItem = styled.li`
  height: 2.5rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const SelectedLinkButton = styled(LinkButton)`
  color: ${colors.brown[1]};
`;

const IntroMenu = ({ menus, currentLocation }) => {
  return (
    <IntroMenuBlock>
      <IntroMenuList>
        {menus.map((menu) =>
          currentLocation === menu.url ? (
            <IntroMenuItem key={menu.url}>
              <SelectedLinkButton to={`/${MENU.INTRO}${menu.url}`}>
                {menu.name}
              </SelectedLinkButton>
            </IntroMenuItem>
          ) : (
            <IntroMenuItem key={menu.url}>
              <LinkButton to={`/${MENU.INTRO}${menu.url}`}>
                {menu.name}
              </LinkButton>
            </IntroMenuItem>
          ),
        )}
      </IntroMenuList>
    </IntroMenuBlock>
  );
};

export default IntroMenu;
