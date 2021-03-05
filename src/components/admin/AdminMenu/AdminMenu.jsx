import React from 'react';
import { MENU } from '../../../constants/menus';
import LinkButton from '../../common/Buttons/LinkButton';
import { AdminMenuBlock, AdminMenuItem, AdminMenuList, SelectedLinkButton } from './AdminMenu.styles';

const AdminMenu = ({ menus, currentLocation }) => {
  return (
    <AdminMenuBlock>
      <AdminMenuList>
        {menus.map((menu) =>
          currentLocation === menu.url ? (
            <AdminMenuItem key={menu.url}>
              <SelectedLinkButton to={`/${MENU.ADMIN}${menu.url}`}>
                {menu.name}
              </SelectedLinkButton>
            </AdminMenuItem>
          ) : (
            <AdminMenuItem key={menu.url}>
              <LinkButton to={`/${MENU.ADMIN}${menu.url}`}>
                {menu.name}
              </LinkButton>
            </AdminMenuItem>
          ),
        )}
      </AdminMenuList>
    </AdminMenuBlock>
  );
};

export default AdminMenu;
