import React from 'react';
import { MENU } from '../../../constants/menus';
import LinkButton from '../../common/Buttons/LinkButton';
import { IntroMenuBlock, IntroMenuItem, IntroMenuList, SelectedLinkButton } from './IntroMenu.styles';

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
